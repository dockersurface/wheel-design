import { setupStory, setupVariant } from '../../utils/storybook';
import stencilStories from './stencil-stories';
const Story = setupStory(stencilStories, {
  category: 'Components/w-icon',
  argDefaults: {
    modifier: '',
    first: 'First',
    middle: 'Middle',
    last: 'Last',
    hex: '#fba308',
    boolean: false,
    radio: '',
  },
  argOptions: {
    modifier: ['default', 'modified'],
    radio: ['default', 'loading', 'error', 'ready'],
  },
  argTypes: {
    hex: {
      control: 'color',
    },
    radio: {
      control: {
        type: 'inline-radio',
        options: ['loading', 'error', 'ready'],
      },
    },
  },
});
export const Default = setupVariant(Story);
export default Story;
