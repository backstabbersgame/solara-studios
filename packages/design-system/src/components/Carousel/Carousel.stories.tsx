import { Meta, StoryObj } from '@storybook/react';
import './Carousel';
import { mockGames } from '../../constants/mock';
import Carousel from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    games: {
      control: 'object',
      description: 'Array de games para exibir no carrossel',
    },
    autoPlay: {
      control: 'boolean',
      description: 'Habilita autoplay do carrossel',
    },
    interval: {
      control: 'number',
      description: 'Intervalo entre slides em milissegundos',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    games: mockGames,
    autoPlay: true,
    interval: 5000,
  },
};

export const AutoPlayDisabled: Story = {
  args: {
    games: mockGames,
    autoPlay: false,
  },
};

export const SingleItem: Story = {
  args: {
    games: [mockGames[0]], 
    autoPlay: false,
  },
};
