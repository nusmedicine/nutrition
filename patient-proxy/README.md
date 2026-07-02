# patient-proxy

A tiny, **zero-dependency** proxy that holds the LLM API key server-side for the
simulated-patient chat. The book (a static site) posts `{messages}` here; the proxy
injects the key, pins the model, disables Qwen3.6 reasoning, applies CORS + rate
limits, and forwards to your llama.cpp / Qwen upstream. The key never reaches the browser.

This is the production form of the dev proxy in `spikes/llm-patient/vite.config.js`.

```
[browser] → https://patient-api.phm.nusmed.space   (FRP + TLS)
          → patient-proxy   (key, model pin, enable_thinking:false, CORS, rate-limit, caps)
          → http://llamacpp:8080/v1/chat/completions   (internal docker network)
```

## Endpoints
- `POST /api/patient`  — chat turns → forwards to `/chat/completions`.
- `POST /api/evaluate` — same, but may pass `response_format` for JSON feedback.
- `GET  /health`       — `{"status":"ok"}` (used by the Docker healthcheck).

Client body: `{ messages, temperature?, max_tokens?, response_format? }`.
The proxy **pins `model` and `enable_thinking`** and **caps** `max_tokens`,
message count, and body size, so a leaked access token can't run other models or
huge jobs on your box.

## Configure
Copy `.env.example` → `.env` and fill it in. Key ones:
- `QWEN_BASE_URL` — internal address of llama.cpp **with `/v1`**, e.g. `http://llamacpp:8080/v1`.
- `QWEN_API_KEY`, `QWEN_MODEL` — your key (server-side only) and the pinned model.
- `ALLOW_ORIGIN` — exact origin(s) of the deployed book (comma-separated).
- `ACCESS_TOKEN` — optional cohort token (sent by the book as `X-Patient-Access`).
- `RATE_LIMIT_RPM`, `MAX_TOKENS_CAP`, `MAX_MESSAGES`, `MAX_BODY_BYTES` — abuse caps.

## Run it locally (smoke test, no Docker)
```bash
cd patient-proxy
cp .env.example .env   # point QWEN_BASE_URL at https://llama.phm.nusmed.space/v1 for a quick test
set -a; . ./.env; set +a
npm start              # or: node server.mjs
# in another shell:
curl -s localhost:8787/api/patient -H 'content-type: application/json' \
  -d '{"messages":[{"role":"system","content":"You are Mdm Tan, an anxious patient. 1-2 short sentences."},{"role":"user","content":"Hello, what brings you in?"}]}'
```

## Deploy into your Docker + FRP stack (Path 1)
1. Drop this `patient-proxy/` folder next to your compose file (or reference it by build path).
2. Merge the services from `docker-compose.example.yml` into your stack — put `llamacpp`,
   `patient-proxy`, and `frpc` on a shared network so the proxy can reach llama.cpp by name.
3. Add the FRP route from `frpc.example.toml` (mirror your existing llama.cpp route; TLS is
   handled by frps the same way).
4. `docker compose up -d --build patient-proxy` and check `docker compose logs patient-proxy`.
5. Point the book's config at `https://patient-api.phm.nusmed.space`.

### Recommended hardening
- **Make llama.cpp internal-only** (remove its public FRP route). Then the proxy is the *only*
  public door — rate-limited, capped, model-pinned — instead of a raw, open inference endpoint.
- Set `ALLOW_ORIGIN` to the real book origin (don't leave it `*` in production).
- Set an `ACCESS_TOKEN` per cohort so you can revoke access without redeploying. (It's visible in
  the book client, so it's a revocation handle — the rate limit is what actually bounds abuse.)

## Verify it end-to-end
```bash
# preflight (should return 204 with Access-Control-Allow-Origin)
curl -si -X OPTIONS https://patient-api.phm.nusmed.space/api/patient \
  -H 'Origin: https://your-book-origin' -H 'Access-Control-Request-Method: POST' | head

# a real turn (add -H 'X-Patient-Access: <token>' if ACCESS_TOKEN is set)
curl -s https://patient-api.phm.nusmed.space/api/patient \
  -H 'content-type: application/json' \
  -d '{"messages":[{"role":"system","content":"You are Mdm Tan, an anxious patient."},{"role":"user","content":"Doctor, is it serious?"}]}'
```

## Book wiring (when the CasePlayer chat lands)
The book reads one config value and posts to `…/api/patient` and `…/api/evaluate`:
```html
<!-- book/_quarto.yml -> format.html.include-in-header (prod value) -->
<meta name="patient-llm" content='{"endpoint":"https://patient-api.phm.nusmed.space","enabled":true}'>
```
No config (or `enabled:false`) → the CasePlayer keeps today's placeholder and takes `fallbackGoto`.

## Notes
- **Non-streaming** for now (matches the spike; latency ~0.5–0.8s). SSE streaming is a later add.
- In-memory rate limiter is per-process — fine for one container/pilot; use Redis if you scale out.
- Logs status + latency + a hashed IP only — no bodies, no student identifiers.
