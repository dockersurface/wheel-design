// this file is generated by 'stencil-to-storybook.js' aka pre-storybook npm task

import markdown from './readme.md';
import { a, h } from '../../utils/storybook';

export default {
  ...{
    component: 'w-image',
    args: {
      src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      lazy: false,
      fit: '',
      placeholder: '',
      errorText: '',
    },
    argTypes: {
      src: {
        description: 'Prop src 图片链接1',
      },
      lazy: {
        description: 'Prop lazy 是否懒加载',
      },
      fit: {
        description: 'Prop fit 图片填充格式',
      },
      placeholder: {
        description: 'Prop placeholder 加载文案',
      },
      errorText: {
        description: 'Prop 错误文案',
      },
    },
    customEvents: [],
    slots: {},
  },
  markdown,
  tpl: ({ id, src, lazy, fit, placeholder, errorText }) => h`
    <w-image
      id="${a(id)}"
			src="${a(src)}"
			lazy="${a(lazy)}"
			fit="${a(fit)}"
			placeholder="${a(placeholder)}"
			errorText="${a(errorText)}"
    ></w-image>
    `,
};
