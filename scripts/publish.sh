#!/bin/sh

set -e

pnpm i

cd packages/components
pnpm build:stencil
npm publish
cd -

echo "✅ Publish completed"
