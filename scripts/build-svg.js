/**
 * 转换svg元素成React组件
 */

const svgr = require('@svgr/core').default;
const { optimize } = require('svgo');
const fs = require('fs');
const { resolve, basename, extname } = require('path');
const camelCase = require('camelcase');
const { parse } = require('svgson');
const prettier = require('prettier');

const transformTemp = (svgData, key) => {
    const compName = camelCase(key, {
        pascalCase: true,
    });
    return `import { Component, h } from '@stencil/core';
import { Icon } from '../icon';

type IconSize = 'inherit' | 'extra-small' | 'small' | 'default' | 'large' | 'extra-large';

@Component({
  tag: 'w-icon-${key}',
  styleUrl: '../w-icon.scss',
  shadow: true
})


export class WIcon${compName} {

  svg: any;
  size?: IconSize;
  spin?: boolean;
  rotate?: number;
  prefixCls?: string;
  type?: string;
  style?: any;
  className?: any;
  render() {
    // 参数透传
    const { size, style, className, rotate, spin, type } = this;
    return <Icon
      svg={${svgData}}
      size={size}
      style={style}
      className={className}
      rotate={rotate}
      spin={spin}
      type={type}
    ></Icon>;
  }
}
`;
};

/**
 *
 * @param {*} entryDir 存放svg文件夹
 * @param {*} outDir 输出React组件文件夹
 * @param {*} decolorize 是否去色
 * @param {*} prefix 图标前缀
 * @param {*} suffix 图标后缀
 */
async function build(entryDir, outDir, compDir, prefix, suffix, svgoPlugins = [], svgrOptions = {}) {
    const prettierConfig = require(resolve(__dirname, '../.prettierrc.js'));
    fs.rmdirSync(outDir, { recursive: true });
    fs.mkdirSync(outDir);
    fs.rmdirSync(compDir, { recursive: true });
    fs.mkdirSync(compDir);
    // 读取svg文件夹下的文件，转译成React组件，并输出
    const files = fs.readdirSync(entryDir, 'utf-8');
    const indexFileName = 'index.ts';
    const batches = files
        .filter((f) => extname(f) === '.svg')
        .map(async (file) => {
            try {
                const svgFileName = basename(file, '.svg');
                const componentName = `${prefix}${camelCase(svgFileName, {
                    pascalCase: true,
                })}${suffix}`;
                const reactFileName = `${componentName}.ts`;
                const svgContent = fs.readFileSync(resolve(entryDir, file), 'utf-8');
                // const svgProps = {
                //     focusable: '{false}',
                //     'aria-hidden': true,
                // };
                const result = optimize(svgContent, {
                    plugins: svgoPlugins,
                });

                // console.log(result.data, 'result');
                const jsxCode = await parse(result.data);
                // const jsxCode = await svgr(result.data, {
                //     plugins: ['@svgr/plugin-jsx'],
                //     svgProps,
                //     iconType: svgFileName,
                //     ...svgrOptions,
                // });
                // 格式化代码，写入文件
                // let _JSONCode = `export default ${JSON.stringify(jsxCode)}`;
                // const formattedCode = prettier.format(_JSONCode, prettierConfig);
                // // console.log(formattedCode, 'formattedCode');
                // fs.writeFileSync(resolve(outDir, reactFileName), formattedCode, 'utf-8');

                let temp = transformTemp(JSON.stringify(jsxCode, null, 2), svgFileName);
                // console.log(formattedCode, 'JSON.stringify(jsxCode)');
                fs.writeFileSync(resolve(compDir, `w-icon-${svgFileName}.tsx`), temp, 'utf-8');

                return { fileName: reactFileName, componentName };
            } catch (error) {
                console.error(error);
                throw error;
            }
        });
    const arr = await Promise.all(batches);
    const indexFileContent = arr
        .map((a) => `export { default as ${a.componentName}} from './${a.componentName}';`)
        .join('\n');
    fs.writeFileSync(
        resolve(outDir, indexFileName),
        '/* eslint-disable @typescript-eslint/no-var-requires */' + '\n' + indexFileContent + '\n',
        'utf-8'
    );
    return arr;
}

module.exports = build;
