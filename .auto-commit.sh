#!/bin/bash
# Auto-commit script for MoringLabs
# Checks for changes and commits them automatically

REPO_DIR="/Users/moring/Movies/001 个人文件夹/007 个人 IP/MoringLabs"
cd "$REPO_DIR" || exit 1

# Check if there are any changes (tracked or untracked)
if [ -n "$(git status --porcelain)" ]; then
    git add -A
    git commit -m "auto-commit: $(date '+%Y-%m-%d %H:%M:%S')"
fi
