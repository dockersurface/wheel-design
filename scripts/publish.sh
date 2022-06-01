#!/bin/sh

set -e

pnpm i --frozen-lockfile

cd packages/components
pnpm build
npm publish
cd -

echo "✅ Publish completed"
