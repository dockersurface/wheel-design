'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4658e1c0.js');

/*
 Stencil Client Patch Esm v2.15.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["w-icon.cjs",[[1,"w-icon"]]],["w-icon-absolute_stroked.cjs",[[1,"w-icon-absolute_stroked"]]],["w-icon-alarm.cjs",[[1,"w-icon-alarm"]]],["w-image.cjs",[[1,"w-image",{"src":[1],"lazy":[4],"fit":[1],"placeholder":[1],"errorText":[1,"error-text"],"loading":[32],"error":[32],"imageWidth":[32],"imageHeight":[32],"show":[32]},[[11,"scroll","handleScroll"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
