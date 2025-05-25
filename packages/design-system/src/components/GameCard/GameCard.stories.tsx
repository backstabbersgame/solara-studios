import { Meta, StoryObj } from '@storybook/react';
import { mockImages, mockDetails } from '../../constants/mock';
import GameCard  from './GameCard';

const meta: Meta<typeof GameCard> = {
  title: 'Components/GameCard',
  component: GameCard,
  tags: ['autodocs'],
  argTypes: {
    images: {
      control: 'object',
      description: 'Imagens responsivas para mobile e desktop',
    },
    details: {
      control: 'object',
      description: 'Lista de detalhes do jogo',
    },
    buttonText: {
      control: 'text',
      description: 'Texto do botão (opcional)',
    },
    name: {
      control: 'text',
      description: 'Nome do jogo',
    },
  },
};

export default meta;

type Story = StoryObj<typeof GameCard>;

export const Default: Story = {
  args: {
    images: mockImages,
    details: mockDetails,
    name: 'Backstabbers Expansion',
    buttonText: 'Detalhes do jogo',
  },
};
