import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import BreakpointTracker from './BreakpointTracker';

export default {
  title: 'Components/BreakpointTracker',
  component: BreakpointTracker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof BreakpointTracker>;

const Template: StoryFn<typeof BreakpointTracker> = () =>
	<BreakpointTracker />;

export const Default = Template.bind({});
Default.args = {};
