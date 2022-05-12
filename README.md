#### 1.优雅提交(commitizen && cz-lerna-changelog)
- commitizen 是用来格式化 git commit message 的工具，它提供了一种问询式的方式去获取所需的提交信息。
- cz-lerna-changelog 是专门为 Lerna 项目量身定制的提交规范，在问询的过程，会有类似影响哪些 package 的选择。如下：
#### 2.commitlint && husky（ 来规范提交）
#### 3.standardjs && lint-staged：除了规范提交信息，代码本身肯定也少了靠规范来统一风格。
- standardjs就是完整的一套 JavaScript 代码规范，自带 linter & 代码自动修正。 它无需配置，自动格式化代码并修正，提前发现风格以及程序问题。
- lint-staged staged 是 Git 里的概念，表示暂存区，lint-staged 表示只检查并矫正暂存区中的文件。 一来提高校验效率，二来可以为老的项目带去巨大的方便。

### 自动生成日志
- CHANGELOG 很明显是和 version 一一对应的，所以需要在 lerna version 中想办法，查看 lerna version 命令的详细说明后，会看到一个配置参数 --conventional-commits。没错，只要我们按规范提交后，在 lerna version 的过程中会便会自动生成当前这个版本的 CHANGELOG。 为了方便，不用每次输入参数，可以配置在 lerna.json中，如下：

### cjs、es、umd：
- cjs：不支持浏览器，执行后才能拿到依赖信息
- esm: 对于 js 模块的规范，在 Node 及 浏览器中均会支持，使用 export/import 进行模块导入导出,type 为 module，打包器可以轻易做到分析依赖以及 Tree-Shaking。当然他也支持动态加载（import()）
- umd:一种兼容 cjs 与 amd 的模块，既可以在 node/webpack 环境中被 require，也可以在浏览器中直接用 CDN 被 script.src 引入

### git和npm tag

### git只是个代码仓库，npm需要把打包后的es/umd文件
### 规范化提交：规范化 git commit 对于提高 git log 可读性、可控的版本控制和 changelog 生成都有着重要的作用。

### karma 测试
### eslint
### git tag 规范
