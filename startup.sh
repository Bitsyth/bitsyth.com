#!/bin/sh
set -eu
cd /workspace
if curl -sf --max-time 2 http://127.0.0.1:8080/ | grep -q "social-tile"; then
  exit 0
fi
# Prefer the standalone homepage over any leftover app server.
if command -v fuser >/dev/null 2>&1; then
  fuser -k 8080/tcp >/dev/null 2>&1 || true
fi
python3 -m http.server 8080 --bind 0.0.0.0 >>/tmp/app-startup.log 2>&1 &
