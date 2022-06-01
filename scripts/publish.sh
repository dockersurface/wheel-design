#!/bin/sh

set -e

pnpm i --frozen-lockfile
pnpm update:version

cd packages/components
pnpm build
npm publish
cd -

echo "✅ Publish completed"
