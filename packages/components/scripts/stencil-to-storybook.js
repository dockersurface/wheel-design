/* eslint-disable no-console, no-template-curly-in-string */
const Filehound = require('filehound');
const fsExt = require('fs-extra');

const divider = '/';
const destFile = destinationPath =>
  // ${component}
  `${destinationPath.join(divider)}/stencil-stories.example.ts`;

const createStorybookLitTpl = stencilSettings => {
  const slots = Object.keys(stencilSettings.slots);
  const argsHTML = ['id', ...Object.keys(stencilSettings.args)];
  const argsTplFnc = [...argsHTML, ...(slots.length > 0 ? ['slot'] : [])];
  // ({ textstyle, slot }) => h`<my-XXX textstyle="${a(textstyle)}">${slot}</my-XXX>`,
  const tpl = `({ ${argsTplFnc.join(', ')} }) => h\`
    <${stencilSettings.component}
      ${argsHTML.map(arg => `${arg}="\${a(${arg})}"`).join('\n\t\t\t')}
    >${slots.length > 0 ? '\n\t\t${slot}\n\t' : ''}</${stencilSettings.component}>\``;
  return tpl;
};

const writeGeneratedFile = (destinationPath, defaultJSON) => {
  // destinationPath: ['node_modules', '...']
  const imports = `
import markdown from './readme.md';
import { a, h } from '../../utils/storybook';
`;

  const fileContent = `// this file is generated by 'stencil-to-storybook.js' aka pre-storybook npm task
${imports}
export default {
  ...${JSON.stringify(defaultJSON, null, 2)},
  markdown,
  tpl: ${createStorybookLitTpl(defaultJSON)}
};`;
  // write created file next to component
  fsExt.writeFileSync(destFile(destinationPath, defaultJSON.component), fileContent);
};

const parsePropsEventsNSlots = filePath => {
  const defaultJSON = {
    component: 'my-XXX',
    args: {
      // prop: '' || false
    },
    argTypes: {
      // modifier: {
      //  control: {
      //    type: 'select',
      //    options: ['default', 'modified'],
      //  },
      // },
      // first: {
      //  description: 'The first name',
      // },
    },
    customEvents: [
      // 'myClick'
    ],
    slots: {
      // defaultSlot: ''
      // namedSlot: ''
    },
  };
  const osSafeFilePath = filePath.replace(/\\/g, divider);
  const destinationPath = osSafeFilePath.split(divider);
  // remove file name
  destinationPath.pop();
  const content = fsExt.readFileSync(osSafeFilePath, 'utf-8');
  const lines = content.split('\n');
  let latestJsDoc = [];
  let jsDocOpen = false;

  lines.map((line, index) => {
    // find tag
    if (line.includes("tag: '")) {
      const tag = line.match(/tag: '(.*)'/);
      if (tag) {
        defaultJSON.component = tag[1];
      }
    }
    if (line.includes('/**')) {
      const jsDocMatch = line.match(/\/\*\* (.*) \*\//);
      if (jsDocMatch && jsDocMatch.length > 0) {
        latestJsDoc = [];
        latestJsDoc.push(jsDocMatch[1]);
      } else {
        jsDocOpen = true;
        latestJsDoc = [];
      }
    } else if (jsDocOpen) {
      const jsDocMatch = line.match(/\* (.*)/);
      if (line.includes('*/')) {
        jsDocOpen = false;
      } else if (jsDocMatch.length > 0) {
        latestJsDoc.push(jsDocMatch[1]);
      }
    }
    // add prop
    if (line.includes('@Prop(')) {
      // @Prop() name: string = '';
      // @Prop() label: string;
      const propName = line.match(/@Prop\(.*\) ([a-z]*)(\?|!)?(:| =)?( .*)?/i);
      // @Prop() clickable: boolean = false;
      // @Prop() clickable = false;
      const isBoolean = line.match(/\).*(:|=) (false|true|boolean)/);
      // @Prop() textstyle?: BadgeTextStyle;
      // @Prop() outline: ColorToken = ColorToken.Transparent;
      const isSelect = line.match(/: ([a-z]*)(;| = .*;)/i);
      // /** emit huiClick event */
      const jsdoc = latestJsDoc.join('\n');

      if (propName && jsdoc) {
        defaultJSON.args[propName[1]] = isBoolean && isBoolean.length > 1 ? false : '';
        defaultJSON.argTypes[propName[1]] = {
          description: jsdoc,
        };

        if (isSelect && !isBoolean && !['string', 'boolean', 'number'].includes(isSelect[1])) {
          defaultJSON.argTypes[propName[1]].control = {
            ts: isSelect[1],
            type: 'select',
            options: [],
          };
        }
      }
    }
    // add events
    if (line.includes('@Event(')) {
      const event = line.match(/@Event\(.*\) ([a-z]*)(!)?: .*/i);
      if (event) {
        defaultJSON.customEvents.push(event[1]);
      }
    }
    // add slots
    if (line.includes('<slot')) {
      const isNamedSlot = line.match(/name="(.*)"/);
      defaultJSON.slots[isNamedSlot && isNamedSlot.length > 1 ? isNamedSlot[1] : 'defaultSlot'] = '';
    }
    return true;
  });

  writeGeneratedFile(destinationPath, defaultJSON);
};

(async function createStencilComponentsJSON() {
  const paths = ['./src/components'];
  const files = await Filehound.create().paths(paths).ext('tsx').find();
  files.map(file => {
    parsePropsEventsNSlots(file);
    return true;
  });
  console.log(JSON.stringify(files));
})();
