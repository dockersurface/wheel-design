#!/bin/sh

set -e

pnpm install --no-frozen-lockfile

cd packages/components
pnpm build:stencil
npm publish
cd -

echo "✅ Publish completed"
