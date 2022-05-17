/**
 * Convert svg elements into React components
 */

const { resolve } = require('path');
const build = require('../../../scripts/build-svg');

// Semi Icon
const entryDir = resolve(__dirname, '../src/svgs');
const outDir = resolve(__dirname, '../src/icons');
const compDir = resolve(__dirname, '../../components/src/components/w-icon/icons');

const customTemplate = ({ template }, opts, { imports, interfaces, componentName, props, jsx, exports }) => {
    const plugins = ['jsx'];
    if (opts.typescript) {
        plugins.push('typescript');
    }
    const typeScriptTpl = template.smart({ plugins });
    return typeScriptTpl.ast`export default ${JSON.stringify(jsx)}`;
};

const svgoPlugins = [
    {
        name: 'convertColors',
        params: { currentColor: /^(?!url|none)./ },
    },
    {
        name: 'cleanupListOfValues',
        active: true,
    },
    {
        name: 'removeStyleElement',
        active: true,
    },
    {
        name: 'removeViewBox',
        active: false,
    },
    {
        name: 'removeDimensions',
        active: true,
    },
];

// icon library decolor
build(entryDir, outDir, compDir, 'Icon', '', svgoPlugins, {
    typescript: true,
    icon: true,
    // template: customTemplate,
});
