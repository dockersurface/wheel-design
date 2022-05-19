import { p as promiseResolve, b as bootstrapLazy } from './index-1a53a42a.js';

/*
 Stencil Client Patch Browser v2.15.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["w-icon",[[1,"w-icon"]]],["my-component_4",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"w-icon-absolute_stroked"],[1,"w-icon-alarm"],[1,"w-image",{"src":[1],"lazy":[4],"fit":[1],"placeholder":[1],"errorText":[1,"error-text"],"loading":[32],"error":[32],"imageWidth":[32],"imageHeight":[32],"show":[32]},[[11,"scroll","handleScroll"]]]]]], options);
});
