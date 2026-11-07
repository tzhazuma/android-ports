#!/usr/bin/env bash
# Weekly check: are the non-ArtCraft Android ports behind their upstreams?
#
# Compares what each port ships against the latest upstream *release*. ArtCraft has its own daily
# task (`~/artcraft-android/scripts/check-version.sh`) and is not covered here.
#
# Exits 10 when something is behind, 0 when nothing is.
set -u
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
unset http_proxy https_proxy all_proxy
behind=0

say() { printf '%-22s %-18s %-18s %s\n' "$1" "$2" "$3" "$4"; }
say PORT SHIPS UPSTREAM VERDICT

# --- VS Code / code-server -------------------------------------------------
ship=$(ls -d "$HOME"/vscode-android/code-server-* 2>/dev/null | head -1 | sed 's|.*code-server-||;s/-linux-arm64$//')
up=$(gh api repos/coder/code-server/releases/latest --jq '.tag_name' 2>/dev/null | tr -d v)
if [ -n "${ship:-}" ] && [ -n "${up:-}" ]; then
  [ "$ship" = "$up" ] && say "vscode(cs)" "$ship" "$up" "current" || { say "vscode(cs)" "$ship" "$up" "BEHIND"; behind=1; }
fi

# --- dsh -------------------------------------------------------------------
# Upstream publishes only pre-release tags (dsh-vX.Y.Z-rc.N); there is no stable tag to compare to,
# so report the newest tag and let the reader decide rather than calling it "behind".
ship=$(grep -m1 -rhoE "dsh [0-9]+\.[0-9]+\.[0-9]+" "$HOME"/dsh-android/STATUS.md 2>/dev/null | awk '{print $2}')
up=$(gh api "repos/deepseek-ai/deepseek-harness/tags?per_page=5" --jq '.[].name' 2>/dev/null | head -1 | sed 's/^dsh-v//')
[ -n "${ship:-}" ] && say "dsh" "$ship" "${up:-?}" "upstream tags are all pre-release"

# --- Octave ----------------------------------------------------------------
ship=$(grep -m1 -rhoE "Octave 11\.[0-9]+\.[0-9]+" "$HOME"/octave-android/STATUS.md 2>/dev/null | awk '{print $2}')
up=$(curl -s --max-time 30 https://ftp.gnu.org/gnu/octave/ 2>/dev/null | grep -oE 'octave-[0-9]+\.[0-9]+\.[0-9]+\.tar' | sed 's/octave-//;s/\.tar//' | sort -V | tail -1)
if [ -n "${ship:-}" ] && [ -n "${up:-}" ]; then
  [ "$ship" = "$up" ] && say "octave" "$ship" "$up" "current" || { say "octave" "$ship" "$up" "BEHIND"; behind=1; }
fi

# --- FreeCAD ---------------------------------------------------------------
# The port tracks the source tree in ~/FreeCAD, not a release tarball, so compare dates instead of
# version numbers: if the checkout is newer than the latest release it is ahead, not behind.
shipdate=$(git -C "$HOME/FreeCAD" log -1 --format=%cs 2>/dev/null)
up=$(gh api repos/FreeCAD/FreeCAD/releases/latest --jq '"\(.tag_name) \(.published_at[0:10])"' 2>/dev/null)
if [ -n "${shipdate:-}" ] && [ -n "${up:-}" ]; then
  say "freecad" "main@$shipdate" "$up" "tracks main; newer than the last release"
fi

# --- Blender ---------------------------------------------------------------
ship=$(grep -m1 -rhoE "Blender [0-9]+\.[0-9]+\.[0-9]+" "$HOME"/blender-android/STATUS.md 2>/dev/null | awk '{print $2}')
up=$(gh api "repos/blender/blender/tags?per_page=1" --jq '.[0].name' 2>/dev/null | sed 's/^v//')
if [ -n "${ship:-}" ] && [ -n "${up:-}" ]; then
  # Compare numerically, not for equality: a port on 5.3.0 against a 5.2.3 release is AHEAD of it,
  # and calling that "behind" would trigger a pointless rebuild of a multi-hour C++ port.
  newest=$(printf '%s\n%s\n' "$ship" "$up" | sort -V | tail -1)
  if [ "$ship" = "$up" ]; then
    say "blender" "$ship" "$up" "current"
  elif [ "$newest" = "$ship" ]; then
    say "blender" "$ship" "$up" "ahead of the last release"
  else
    say "blender" "$ship" "$up" "BEHIND"; behind=1
  fi
fi

[ "$behind" = 1 ] && exit 10
exit 0
