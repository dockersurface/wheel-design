// this file is generated by 'stencil-to-storybook.js' aka pre-storybook npm task

import markdown from './readme.md';
import { a, h } from '../../utils/storybook';

export default {
  ...{
    component: 'my-XXX',
    args: {},
    argTypes: {},
    customEvents: [],
    slots: {},
  },
  markdown,
  tpl: ({ id }) => h`
    <my-XXX
      id="${a(id)}"
    ></my-XXX>`,
};
