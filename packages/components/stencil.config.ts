import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import nodePolyfills from 'rollup-plugin-node-polyfills';

const { distDirs } = require('./package.json');
const yargs = require('yargs');

const docs = yargs.argv.docs;

const generatedConfig: Config = {
  namespace: 'lib',
  taskQueue: 'async',
  srcDir: 'src',
  globalStyle: 'src/global/variables.css',
  globalScript: 'src/global/app.ts',
  devServer: {
    reloadStrategy: 'hmr',
    openBrowser: false,
  },
  outputTargets: [
    {
      type: 'dist',
      // esmLoaderPath: '../loader',
      dir: distDirs.stencil,
      copy: [
        // copy fonts into static for storybook and stencil build
        { src: 'fonts' },
      ],
    },
    {
      type: 'dist-custom-elements',
      dir: distDirs.stencil,
    },
    // create components(.d.ts|json) into dist
    {
      type: 'docs-json',
      file: `${distDirs.stencil}/components.json`,
    },
    // {
    //   type: 'docs-readme',
    // },
    // {
    //   type: 'www',
    //   serviceWorker: null, // disable service workers
    // },
  ],
  plugins: [nodePolyfills(), sass()],
};

// creates readme.md for components
if (docs) {
  generatedConfig.outputTargets.push({
    type: 'docs-readme',
    dir: 'src',
  });
}

export const config: Config = generatedConfig;
