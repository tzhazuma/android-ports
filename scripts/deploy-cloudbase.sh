#!/usr/bin/env bash
# Publish this site to CloudBase static hosting (国内站).
#
#   ./scripts/deploy-cloudbase.sh [envId]
#
# Why a staging copy instead of deploying the repo directory: `tcb hosting deploy` walks whatever it
# is given, and `.git` contains objects it cannot read — it fails with "路径无读写权限" on a loose
# object rather than skipping the directory. Copying only the site's own files keeps the upload to
# exactly what should be public.
set -eu

ENV_ID="${1:-vulnerable-smelt-d5esb679375001e}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT

cp -R "$ROOT/index.html" "$ROOT/assets" "$ROOT/icons" "$ROOT/shots" "$STAGE/"

# The QR images shipped mode 400 once, which the uploader cannot read. Normalise rather than depend
# on how they were checked out.
chmod -R a+r "$STAGE"

echo "deploying $(find "$STAGE" -type f | wc -l | tr -d ' ') files to $ENV_ID"
cd "$STAGE"
exec tcb hosting deploy . / -e "$ENV_ID"
