'use strict';

const index = require('./index-4658e1c0.js');

/*
 Stencil Client Patch Browser v2.15.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('lib.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["w-icon.cjs",[[1,"w-icon"]]],["my-component_4.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"w-icon-absolute_stroked"],[1,"w-icon-alarm"],[1,"w-image",{"src":[1],"lazy":[4],"fit":[1],"placeholder":[1],"errorText":[1,"error-text"],"loading":[32],"error":[32],"imageWidth":[32],"imageHeight":[32],"show":[32]},[[11,"scroll","handleScroll"]]]]]], options);
});
