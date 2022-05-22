import { p as promiseResolve, b as bootstrapLazy } from './index-1a53a42a.js';

/*
 Stencil Client Patch Esm v2.15.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["w-icon",[[1,"w-icon"]]],["w-icon-absolute_stroked",[[1,"w-icon-absolute_stroked"]]],["w-icon-alarm",[[1,"w-icon-alarm"]]],["w-image",[[1,"w-image",{"src":[1],"lazy":[4],"fit":[1],"placeholder":[1],"errorText":[1,"error-text"],"loading":[32],"error":[32],"imageWidth":[32],"imageHeight":[32],"show":[32]},[[11,"scroll","handleScroll"]]]]]], options);
  });
};

export { defineCustomElements };
