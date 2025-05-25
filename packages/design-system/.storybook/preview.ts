import type { Preview } from '@storybook/react';
import './preview.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    react: {
      strictMode: true,
      unstable_throwErrors: false,
    },
  },
};

export default preview;
