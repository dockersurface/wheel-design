(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var ClientApi=__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+@storybook+client-api@6.4.22_wcqkhtmu7mswc6yz4uyexck3ty/node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+@storybook+client-logger@6.4.22/node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={controls:{expanded:!0},actions:{argTypesRegex:"^on[A-Z].*"},options:{storySort:{order:__webpack_require__("./storysort.json"),method:"alphabetical",locales:"de-DE"}},docs:{extractComponentDescription:function(component,_ref){var notes=_ref.notes;return notes?"string"==typeof notes?notes:notes.markdown||notes.text:null}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+@storybook+web-components@6.4.22_dmi7kiztmliergdiiuyg7cpopy/node_modules/@storybook/web-components/dist/esm/client/index.js").configure)([__webpack_require__("./src/components sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx|mdx))$")],module,!1)}).call(this,__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+webpack@4.46.0/node_modules/webpack/buildin/module.js")(module))},"./package.json":function(module){module.exports=JSON.parse('{"name":"@wheel-design/components","version":"0.0.1","distDirs":{"stencil":"dist","storybook":"dist-storybook","beawareofchange":"change aswell main,module,es2015,es2017,types,collection and .gitignore"},"description":"wheel-design Component Starter","main":"dist/index.cjs.js","module":"dist/index.js","es2015":"dist/esm/index.mjs","es2017":"dist/esm/index.mjs","types":"dist/types/index.d.ts","collection":"dist/collection/collection-manifest.json","collection:main":"dist/collection/index.js","unpkg":"dist/components/components.esm.js","scripts":{"test":"stencil test --spec --e2e","test.watch":"stencil test --spec --e2e --watchAll","generate":"stencil generate","--- development ---":"this is a divider","start":"concurrently -n storybook,stencil,proxy -c \\"bgMagenta.bold,bgBlue.bold,bgCyan.bold\\" \\"npm:watch:storybook\\" \\"npm:watch:stencil\\" \\"npm:watch:proxy\\"","watch:storybook":"npm run stencil:to:storybook && start-storybook --no-dll -p 3001 --ci --quiet","watch:stencil":"stencil build --dev --watch --serve --port 3002","watch:proxy":"wait-on http://localhost:3001/ && wait-on http://localhost:3002/ && node ./scripts/proxy.js","new:component":"node ./scripts/create-component.js","--- production ---":"this is a divider","build":"run-s build:stencil build:storybook","build:stencil":"stencil build --docs","build:pre:storybook":"node ./scripts/pre-storybook.js","build:storybook":"npm run build:pre:storybook && build-storybook --quiet --output-dir ./dist-storybook --static-dir node_modules/.storybook-static-dir","storybook:static:dir":"node ./scripts/storybook-static-dir.js","stencil:to:storybook":"node ./scripts/stencil-to-storybook.js"},"dependencies":{"@stencil/sass":"^1.5.2","@stencil/core":"^2.13.0","classnames":"^2.3.1"},"devDependencies":{"yargs":"^16.1.0","@types/jest":"^27.0.3","jest":"^27.4.5","jest-cli":"^27.4.5","rollup-plugin-node-polyfills":"^0.2.1","puppeteer":"^10.0.0"},"license":"MIT"}')},"./src/components sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx|mdx))$":function(module,exports,__webpack_require__){var map={"./getting-started.stories.mdx":"./src/components/getting-started.stories.mdx","./my-component/my-component.stories.ts":"./src/components/my-component/my-component.stories.ts","./w-image/my-component.stories.ts":"./src/components/w-image/my-component.stories.ts"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src/components sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx|mdx))$"},"./src/components/getting-started.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+react@16.14.0/node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+@mdx-js+react@1.6.22/node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+@storybook+addon-docs@6.4.22_f7x6jc57cw64pameorqbl6qwnm/node_modules/@storybook/addon-docs/dist/esm/index.js"),blocks=__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+@storybook+addon-docs@6.4.22_f7x6jc57cw64pameorqbl6qwnm/node_modules/@storybook/addon-docs/blocks.js"),_require=__webpack_require__("./package.json"),distDirs=(_require.name,_require.distDirs),ts_dedent_esm=(_require.scripts,_require.version,__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js")),_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(blocks.b,{title:"Getting Started",mdxType:"Meta"}),Object(esm.b)("h1",{id:"stencil--storybook"},"Stencil + Storybook"),Object(esm.b)("h2",{id:"github"},"Github"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Repo: ",Object(esm.b)("a",{parentName:"li",href:"https://github.com/dutscher/stencil-storybook",target:"_blank",rel:"nofollow noopener noreferrer"},"https://github.com/dutscher/stencil-storybook")),Object(esm.b)("li",{parentName:"ul"},"Issues: ",Object(esm.b)("a",{parentName:"li",href:"https://github.com/dutscher/stencil-storybook/issues",target:"_blank",rel:"nofollow noopener noreferrer"},"https://github.com/dutscher/stencil-storybook/issues"))),Object(esm.b)("h2",{id:"mdx-links"},"MDX links"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("a",{parentName:"li",href:"https://mdxjs.com/getting-started",target:"_blank",rel:"nofollow noopener noreferrer"},"MDX")),Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("a",{parentName:"li",href:"https://storybook.js.org/docs/react/api/mdx",target:"_blank",rel:"nofollow noopener noreferrer"},"Storybook MDX"))),Object(esm.b)("h2",{id:"add-this-snippet-code-to-your-page"},"Add this snippet code to your page"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("a",{parentName:"li",href:"https://stenciljs.com/docs/output-targets#differential-bundling",target:"_blank",rel:"nofollow noopener noreferrer"},"as shown in Stencil Docs"))),Object(esm.b)(blocks.c,{language:"html",code:ts_dedent_esm.a`
     <script src="${distDirs.stencil}/lib/lib.js" nomodule></script>
     <script src="${distDirs.stencil}/lib/lib.esm.js" type="module"></script>
     <link rel="stylesheet" href="dist/lib/lib.css" />
     <my-component ...></my-component>
  `,mdxType:"Source"}),Object(esm.b)("h2",{id:"readmemd"},Object(esm.b)("a",{parentName:"h2",href:"https://github.com/dutscher/stencil-storybook/blob/main/README.md",target:"_blank",rel:"nofollow noopener noreferrer"},"README.md")),Object(esm.b)(blocks.a,{markdown:"![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)\n\n# [Stencil 2.5.2](https://stenciljs.com/) + [Storybook 6.2.9](https://storybook.js.org/) + Real Stencil HMR*\n\n[DEMO Storybook on gh-pages](https://dutscher.github.io/stencil-storybook/) | *hot module reloading\n\nThis is a starter project for building components with Stencil in Storybook.\nThis sample includes _Real_ HMR in Storybook, with the Stencil build running in watch mode.\nStorybook only knows the stories, markup of stencil and entry point.\n\nAswell its chromatic tested, this means visiual regression testing of your stories.\n\nThanks to stencil storybook starters [bjankord](https://github.com/bjankord/stencil-storybook-boilerplate), [elwynelwyn](https://github.com/elwynelwyn/stencilbook-ding)<br/>\nAnd [shoelace](https://github.com/shoelace-style/shoelace) where i got the proxy hmr solution.\n\nAnd maybe this [issue](https://github.com/storybookjs/storybook/issues/4600#issuecomment-711443696) can be closed?\n\n✔️ NodeJS 14.13.1 ready (use nvm!)<br/>\n✔️ Stencil 2 ready, not yet es5 tested but should work! + BEM and REM utils<br/>\n✔️ Storybook 6+ WebComponents ready<br/>\n✔️ Real HMR on development with Stencil Dev Server, this keep storybooks state of controls<br/>\n✔️ chromatic.com visiual regression testing ready<br/>\n✔️ Tested on Windows 10 and Mac 10.15.6<br/>\n✔️ Bootstrap reset and Webfonts boilerplate included<br/>\n\n## How the HMR works\n\nStencil has an included /~dev-server which can out of the box HMR.\nSo we start storybook with webpack and stencil dev mode with rollup.\nOn the top we have a proxy which include the /~dev-server of stencil into the storybook canvas iframe.html\nEt voilà, this is what we want!\n\n## When you have issues, please let me know!\n\nUse my issues section\n\n## Start to develop\n\n`npm install`<br/>\n`npm start`<br/>\n`your storybook will run under: http://localhost:3000`\n\n## Build your production\n\n`npm build`\n\n## Test your Stencil\n\n`npm test`<br/>\n`npm test -t special.spec.ts`\n\nThat's it!<br/>\nCheers dutscher\n",mdxType:"Description"}),Object(esm.b)("img",{src:"assets/1337.jpg",style:{height:"0px"}}))}MDXContent.isMDXComponent=!0;var __page=function(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Getting Started",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta},"./src/components/my-component/my-component.stories.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Modified",(function(){return Modified})),__webpack_require__.d(__webpack_exports__,"Slots",(function(){return Slots}));var storybook=__webpack_require__("./src/utils/storybook/index.ts"),stencil_stories_example=Object.assign({},{component:"my-component",args:{first:"",middle:"",last:""},argTypes:{first:{description:"First Prop"},middle:{description:"Middle Prop"},last:{description:"Last Prop"}},customEvents:[],slots:{}},{markdown:"# my-component\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property | Attribute | Description | Type     | Default     |\n| -------- | --------- | ----------- | -------- | ----------- |\n| `first`  | `first`   | First Prop  | `string` | `undefined` |\n| `last`   | `last`    | Last Prop   | `string` | `undefined` |\n| `middle` | `middle`  | Middle Prop | `string` | `undefined` |\n\n\n## Dependencies\n\n### Depends on\n\n- [w-icon-absolute_stroked](../icons)\n- [w-icon-alarm](../icons)\n- [w-image](../w-image)\n\n### Graph\n```mermaid\ngraph TD;\n  my-component --\x3e w-icon-absolute_stroked\n  my-component --\x3e w-icon-alarm\n  my-component --\x3e w-image\n  style my-component fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n",tpl:function(_ref){var id=_ref.id,first=_ref.first,middle=_ref.middle,last=_ref.last;return storybook.b`
    <my-component
      id="${Object(storybook.a)(id)}"
			first="${Object(storybook.a)(first)}"
			middle="${Object(storybook.a)(middle)}"
			last="${Object(storybook.a)(last)}"
    ></my-component>`}}),Story=Object(storybook.d)(stencil_stories_example,{category:"Components/My Component",argDefaults:{modifier:"",first:"First",middle:"Middle",last:"Last",hex:"#fba308",boolean:!1,radio:""},argOptions:{modifier:["default","modified"],radio:["default","loading","error","ready"]},argTypes:{hex:{control:"color"},radio:{control:{type:"inline-radio",options:["loading","error","ready"]}}}}),Default=Object(storybook.e)(Story),Modified=Object(storybook.e)(Story,{modifier:"modified"}),Slots=Object(storybook.c)("<slot's />",(function(){return storybook.b`
  ${["Single default slot",'Slot default + <div slot="right">Named Slot</div>',storybook.b`<div slot="right">Use h wrapper, if there is reactive stuff inside of me</div>`].map((function(slot){return storybook.b`${Story.tplComposition({slot:slot})}<br>`}))}
`}));__webpack_exports__.default=Story;Default.parameters=Object.assign({storySource:{source:"setupVariant(Story)"}},Default.parameters),Modified.parameters=Object.assign({storySource:{source:"setupVariant(Story, { modifier: 'modified' })"}},Modified.parameters),Slots.parameters=Object.assign({storySource:{source:"setupComposition(\n  `<slot's />`,\n  () => h`\n  ${[\n    'Single default slot',\n    'Slot default + <div slot=\"right\">Named Slot</div>',\n    h`<div slot=\"right\">Use h wrapper, if there is reactive stuff inside of me</div>`,\n  ].map((slot) => h`${Story.tplComposition({ slot })}<br>`)}\n`,\n)"}},Slots.parameters)},"./src/components/w-image/my-component.stories.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Modified",(function(){return Modified})),__webpack_require__.d(__webpack_exports__,"Slots",(function(){return Slots}));var storybook=__webpack_require__("./src/utils/storybook/index.ts"),stencil_stories=Object.assign({},{component:"w-image",args:{src:"",lazy:!1,fit:"",placeholder:"",errorText:""},argTypes:{src:{description:"Prop src 图片链接1"},lazy:{description:"Prop lazy 是否懒加载"},fit:{description:"Prop fit 图片填充格式"},placeholder:{description:"Prop placeholder 加载文案"},errorText:{description:"Prop 错误文案"}},customEvents:[],slots:{}},{markdown:'# my-component\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property      | Attribute     | Description           | Type                                                       | Default     |\n| ------------- | ------------- | --------------------- | ---------------------------------------------------------- | ----------- |\n| `errorText`   | `error-text`  | Prop 错误文案             | `string`                                                   | `\'加载失败\'`    |\n| `fit`         | `fit`         | Prop fit 图片填充格式       | `"contain" \\| "cover" \\| "fill" \\| "none" \\| "scale-down"` | `\'none\'`    |\n| `lazy`        | `lazy`        | Prop lazy 是否懒加载       | `boolean`                                                  | `false`     |\n| `placeholder` | `placeholder` | Prop placeholder 加载文案 | `string`                                                   | `\'加载中...\'`  |\n| `src`         | `src`         | Prop src 图片链接         | `string`                                                   | `undefined` |\n\n\n## Dependencies\n\n### Used by\n\n - [my-component](../my-component)\n\n### Graph\n```mermaid\ngraph TD;\n  my-component --\x3e w-image\n  style w-image fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n',tpl:function(_ref){var id=_ref.id,src=_ref.src,lazy=_ref.lazy,fit=_ref.fit,placeholder=_ref.placeholder,errorText=_ref.errorText;return storybook.b`
    <w-image
      id="${Object(storybook.a)(id)}"
			src="${Object(storybook.a)(src)}"
			lazy="${Object(storybook.a)(lazy)}"
			fit="${Object(storybook.a)(fit)}"
			placeholder="${Object(storybook.a)(placeholder)}"
			errorText="${Object(storybook.a)(errorText)}"
    ></w-image>`}}),Story=Object(storybook.d)(stencil_stories,{category:"Components/w-image",argDefaults:{modifier:"",first:"First",middle:"Middle",last:"Last",hex:"#fba308",boolean:!1,radio:""},argOptions:{modifier:["default","modified"],radio:["default","loading","error","ready"]},argTypes:{hex:{control:"color"},radio:{control:{type:"inline-radio",options:["loading","error","ready"]}}}}),Default=Object(storybook.e)(Story),Modified=Object(storybook.e)(Story,{modifier:"modified"}),Slots=Object(storybook.c)("<slot's />",(function(){return storybook.b`
  ${["Single default slot",'Slot default + <div slot="right">Named Slot</div>',storybook.b`<div slot="right">Use h wrapper, if there is reactive stuff inside of me</div>`].map((function(slot){return storybook.b`${Story.tplComposition({slot:slot})}<br>`}))}
`}));__webpack_exports__.default=Story;Default.parameters=Object.assign({storySource:{source:"setupVariant(Story)"}},Default.parameters),Modified.parameters=Object.assign({storySource:{source:"setupVariant(Story, { modifier: 'modified' })"}},Modified.parameters),Slots.parameters=Object.assign({storySource:{source:"setupComposition(\n  `<slot's />`,\n  () => h`\n  ${['Single default slot', 'Slot default + <div slot=\"right\">Named Slot</div>', h`<div slot=\"right\">Use h wrapper, if there is reactive stuff inside of me</div>`].map(\n    slot => h`${Story.tplComposition({ slot })}<br>`,\n  )}\n`,\n)"}},Slots.parameters)},"./src/utils/storybook/index.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"d",(function(){return setupStory})),__webpack_require__.d(__webpack_exports__,"e",(function(){return setupVariant})),__webpack_require__.d(__webpack_exports__,"c",(function(){return setupComposition})),__webpack_require__.d(__webpack_exports__,"b",(function(){return h})),__webpack_require__.d(__webpack_exports__,"a",(function(){return a}));var lit_html=__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+lit-html@1.4.1/node_modules/lit-html/lit-html.js"),react=__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+react@16.14.0/node_modules/react/index.js"),react_default=__webpack_require__.n(react),prismjs_prism=__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+prismjs@1.28.0/node_modules/prismjs/prism.js"),prism_default=__webpack_require__.n(prismjs_prism),template_polyfill=__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+lit-html@1.4.1/node_modules/lit-html/polyfills/template_polyfill.js"),if_defined=__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+lit-html@1.4.1/node_modules/lit-html/directives/if-defined.js"),previousValues=new WeakMap,script=Object(lit_html.d)((function(value){return function(part){if(!(part instanceof lit_html.b))throw new Error("unsafeHTML can only be used in text bindings");var previousValue=previousValues.get(part);if(void 0===previousValue||value!==previousValue.value||part.value!==previousValue.script){var $script=document.createElement("script");$script.textContent=value,part.setValue($script),previousValues.set(part,{value:value,script:$script})}}}));function action(eventNames){return script(`\n    try {\n      var uniqueId = function(eventName) {\n        return eventName + '-' + (new Date()).getTime();\n      };\n      var script = document.currentScript;\n      var comp = script !== null\n        ? script.previousElementSibling\n        : null;\n\n      if (comp !== null) {\n      ${eventNames.map((function(eventName){return`\n        comp.parentNode.querySelectorAll(comp.tagName).forEach(function(webcmp) {\n          webcmp.addEventListener('${eventName}', function(event) {\n            __STORYBOOK_ADDONS.getChannel()\n              .emit('storybook/actions/action-event', {\n                count: 0,\n                data: {\n                  name: '${eventName}',\n                  args: event.detail\n                  // the next line need a fix in telesync: https://github.com/storybookjs/storybook/issues/8544\n                  // name: '${eventName}', args: [event]\n                },\n                id: uniqueId('${eventName}'),\n                options: {\n                  depth: 15,\n                  clearOnStoryChange: true,\n                  limit: 50,\n                  allowFunction: false\n                }\n              });\n          });\n        });`})).join("\n")}\n      }\n    } catch (e) {\n      console.log('costum-action-error', e)\n    }\n  `)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+prismjs@1.28.0/node_modules/prismjs/components/prism-jsx.js"),Object(template_polyfill.a)(),function(){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach);"currentScript"in document||(Array.prototype.filter||(Array.prototype.filter=function(func,thisArg){throw new TypeError}),Object.defineProperty(document,"currentScript",{get:function(){try{throw new Error}catch(err){var filteredScriptsWithCurrentScript=Array.prototype.slice.call(document.querySelectorAll("body script")).filter((function(script){return-1!==script.innerHTML.indexOf("document.currentScript")&&null===script.getAttribute("returned")})),returnedScript=filteredScriptsWithCurrentScript[0];return returnedScript&&returnedScript.setAttribute("returned","true"),returnedScript}}}))}();var setCodeTo=function(Variant,litTpl){var renderCode=function(args){var div=document.createElement("div");Object(lit_html.f)(litTpl(Object.assign({},args||{})),div);var code=div.innerHTML;return code=(code=(code=(code=(code=(code=code.replace(/<!---->/g,"")).replace(/ {2,6}\n/g,"")).replace(/ {4}(.*)/g,"$1")).replace("\n","")).replace(/ {2}$/gm,"")).replace(/ {2}<br>/g,"<br>")};Variant.parameters={docs:{source:{code:renderCode(Object.assign({},Variant.args,{docsView:!0}))},prepareForInline:function(storyFn,storyData){var Story=function(_React$Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Story,_React$Component);var _super=_createSuper(Story);function Story(props){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Story),(_this=_super.call(this,props)).wrapperRef=void 0,_this.wrapperRef=react_default.a.createRef(),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Story,[{key:"componentDidMount",value:function componentDidMount(){Object(lit_html.f)(storyFn(),this.wrapperRef.current)}},{key:"render",value:function render(){var prism=document.querySelector("#anchor--"+storyData.id+" .prismjs .language-jsx");return prism&&(prism.innerHTML=prism_default.a.highlight(renderCode(Object.assign({},storyData.args,{docsView:!0})),prism_default.a.languages.jsx,"jsx")),react_default.a.createElement("div",{ref:this.wrapperRef,title:"willy was here"})}}]),Story}(react_default.a.Component);return react_default.a.createElement(Story)}}}};function setupStory(stencilSettings,storySettings){var settings={component:stencilSettings.component,title:storySettings.category,parameters:Object.assign({notes:{markdown:String(stencilSettings.markdown||"").replace(/# (.*)-(.*)/g,"# <$1-$2 />").replace(/\\\|/g,"|").replace(/undefined/g,"-")},actions:{handles:storySettings.events||[]},docs:{source:{}},a11y:{element:`#root ${stencilSettings.component}`,config:{},options:{},manual:!0}},storySettings.parameters),customEvents:stencilSettings.customEvents||null,events:storySettings.events||null,args:{},argTypes:{},tpl:storySettings.tplOverride||stencilSettings.tpl,tplComposition:function(args){return settings.tpl.bind()(Object.assign({},args,{docsView:!0}))},tplCompositionWithActionLogs:function(args){return lit_html.e`${settings.tpl.bind()(Object.assign({},args,{docsView:!0}))}${settings.customEvents?action(settings.customEvents):""}`}};return settings.args&&(settings.args=Object.assign({},stencilSettings.args,storySettings.argDefaults||{})),settings.argTypes&&(settings.argTypes=Object.assign({},stencilSettings.argTypes,storySettings.argTypes||storySettings.argDefaults||{})),storySettings.argOptions&&Object.keys(storySettings.argOptions).map((function(arg){return settings.argTypes[arg]&&("control"in settings.argTypes[arg]?settings.argTypes[arg].control.options=storySettings.argOptions[arg]:settings.argTypes[arg].control={type:"select",options:storySettings.argOptions[arg]}),!0})),settings}function setupVariant(Story){var args=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},title=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",litHtmlLogs=function(variantVargs){return lit_html.e`${Story.tpl(Object.assign({},Variant.args,variantVargs))}${Story.customEvents?action(Story.customEvents):""}`},Variant=litHtmlLogs.bind({});return Variant.args=Object.assign({},Story.args,args),Variant.storyName=title,setCodeTo(Variant,Story.tpl),Variant}function setupComposition(titleOrLitHtml,litHtml){var realLitHtml=titleOrLitHtml,storyName="";"string"==typeof titleOrLitHtml&&(realLitHtml=litHtml,storyName=titleOrLitHtml);var Variant=realLitHtml.bind({});return Variant.storyName=storyName,setCodeTo(Variant,realLitHtml),Variant}var a=function(value){return!1!==value&&""!==value&&"default"!==value||(value=void 0),Object(if_defined.a)(value)},h=lit_html.e},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+@storybook+web-components@6.4.22_dmi7kiztmliergdiiuyg7cpopy/node_modules/@storybook/web-components/dist/esm/client/index.js")},"./storysort.json":function(module){module.exports=JSON.parse('["Getting Started","Components"]')},0:function(module,exports,__webpack_require__){__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+@storybook+core-client@6.4.22_d6fpg2ullfkn4dktgmyqz75y3y/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+@storybook+core-client@6.4.22_d6fpg2ullfkn4dktgmyqz75y3y/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+@storybook+addon-docs@6.4.22_f7x6jc57cw64pameorqbl6qwnm/node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+@storybook+addon-docs@6.4.22_f7x6jc57cw64pameorqbl6qwnm/node_modules/@storybook/addon-docs/dist/esm/frameworks/web-components/config.js-generated-config-entry.js"),__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+@storybook+web-components@6.4.22_dmi7kiztmliergdiiuyg7cpopy/node_modules/@storybook/web-components/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+@storybook+addon-links@6.4.22/node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+@storybook+addon-actions@6.4.22/node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+@storybook+addon-actions@6.4.22/node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+@storybook+addon-backgrounds@6.4.22/node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+@storybook+addon-backgrounds@6.4.22/node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+@storybook+addon-measure@6.4.22/node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+@storybook+addon-outline@6.4.22/node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+@storybook+addon-a11y@6.4.22/node_modules/@storybook/addon-a11y/dist/esm/a11yRunner.js-generated-config-entry.js"),__webpack_require__("../../node_modules/.pnpm/registry.npmmirror.com+@storybook+addon-a11y@6.4.22/node_modules/@storybook/addon-a11y/dist/esm/a11yHighlight.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);