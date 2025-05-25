export const mockImages = {
  mobile: {
    src: '/images/backstabbers-expansion-mobile.png',
    width: 320,
    height: 285,
  },
  desktop: {
    src: '/images/backstabbers-expansion-desktop.png',
    width: 629,
    height: 394,
  },
};

export const mockDetails = [
  {
    iconSrc: '/images/sword.svg',
    iconAlt: 'Ícone de vendas',
    title: '300+ cópias vendidas',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sit aliquet\nelementum enim sed sed tristique fringilla.',
  },
  {
    iconSrc: '/images/sketch-logo.svg',
    iconAlt: 'Ícone de gameplay',
    title: '4 modos de jogo',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sit aliquet\nelementum enim sed sed tristique fringilla.',
  },
  {
    iconSrc: '/images/heart.svg',
    iconAlt: 'Ícone de expansão',
    title: '3 expansões',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sit aliquet\nelementum enim sed sed tristique fringilla.',
  },
];

export const mockGames = [
  {
    id: 1,
    name: 'Backstabbers Expansion',
    images: {
      ...mockImages,
    },
    details: [...mockDetails],
    buttonText: 'Detalhes do jogo',
  },
  {
    id: 2,
    name: 'Backstabbers Expansion',
    images: {
      mobile: {
        src: '/images/backstabbers-expansion-mobile copy.png',
        width: 320,
        height: 285,
      },
      desktop: {
        src: '/images/backstabbers-expansion-desktop copy.png',
        width: 629,
        height: 394,
      },
    },
    details: [...mockDetails],
    buttonText: 'Detalhes do jogo',
  },
];
