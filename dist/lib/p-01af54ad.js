var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e,n,r){return e(r={path:n,exports:{},require:function(){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},r.exports),r.exports}var r=n((function(e){
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var n={}.hasOwnProperty;function r(){for(var e=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var f=typeof i;if("string"===f||"number"===f)e.push(i);else if(Array.isArray(i)){if(i.length){var t=r.apply(null,i);t&&e.push(t)}}else if("object"===f)if(i.toString===Object.prototype.toString)for(var u in i)n.call(i,u)&&i[u]&&e.push(u);else e.push(i.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()}));export{e as a,r as b,n as c}