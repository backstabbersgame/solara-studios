import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Grid from './Grid';

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Grid>;

export default meta;

const Template: StoryFn<typeof Grid> = (args) => (
  <Grid {...args}>
    {Array.from({ length: args.layout ?? 0 }).map((_, index) => (
      <div
        key={index}
        className='storybook-grid-item'
      ></div>
    ))}
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  layout: 12,
};

export const Laptop = Template.bind({});
Laptop.args = {
  layout: 12,
};
Laptop.parameters = {
  viewport: { defaultViewport: 'laptop' },
};

export const Tablet = Template.bind({});
Tablet.args = {
  layout: 6,
};
Tablet.argTypes = {
  layout: {
    mapping: {
      4: 6,
      6: 6,
      8: 8,
      12: 8,
    },
  },
};
Tablet.parameters = {
  viewport: { defaultViewport: 'tablet' },
};

export const Mobile = Template.bind({});
Mobile.args = {
  layout: 4,
};
Mobile.argTypes = {
  layout: {
    mapping: {
      4: 4,
      6: 4,
      8: 4,
      12: 4,
    },
  },
};
Mobile.parameters = {
  viewport: { defaultViewport: 'mobile2' },
};
