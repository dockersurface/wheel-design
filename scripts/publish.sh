#!/bin/sh

set -e

pnpm i --frozen-lockfile

cd packages/components
pnpm build:stencil
npm publish
cd -

echo "✅ Publish completed"
