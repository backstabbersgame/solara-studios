import React, { useMemo, useState } from 'react';
import styles from './Game.module.scss';
import Image from 'next/image';
import { Button, Carousel } from '@solara-studios/design-system/src';
import useBreakpoint from 'src/hooks/useBreakpoint';
import gamesData from '../../content/gamesData.json';

const Game = () => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobileOrTablet =
    currentBreakpoint === 'mobile' || currentBreakpoint === 'tablet';  
  const games = useMemo(() => [...gamesData], []);

  const formsSrc = isMobileOrTablet
    ? '/images/mobile/game-section-forms.svg'
    : '/images/desktop/game-section-forms.svg';
  const formsWidth = isMobileOrTablet ? 611 : 1440;
  const formsHeight = isMobileOrTablet ? 60.13 : 112.38;

  return (
    <section className={styles.game}>
      <div className={styles['game-container']}>
        <section className={styles.header}>
          <Image
            width={isMobileOrTablet ? 26 : 32}
            height={isMobileOrTablet ? 26 : 32}
            src='/images/rocket.svg'
            alt='Foguete'
          />
          <div className={styles['section-title']}>
            <h3 className={styles['section-title-one']}>Conheça&nbsp;</h3>
            <h3 className={styles['section-title-two']}>nossos jogos</h3>
          </div>
          <p className={styles['game-p']}>
            {`Lorem ipsum dolor sit amet consectetur. Sit aliquet 
           elementum enim sed sed tristique fringilla.`}
          </p>
        </section>
        <div className={styles.carousel}>
          <Carousel
            games={games}
            // activeIndex={activeIndex}
            // setActiveIndex={setActiveIndex}
          />
        </div>
        <Button
          variant='link'
          arrowRight
          className={styles.link}
        >
          Ver todos os jogos
        </Button>
      </div>
      <Image
        width={formsWidth}
        height={formsHeight}
        src={formsSrc}
        alt='Ondas em degradê'
        style={{ width: '100%', height: 'auto' }}
      />
    </section>
  );
};

export default Game;
