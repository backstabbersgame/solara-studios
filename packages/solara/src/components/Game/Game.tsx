import React, { useMemo, useState } from 'react';
import styles from './Game.module.scss';
import Image from 'next/image';
import { Button, Carousel } from '@solara-studios/design-system/src';
import useBreakpoint from 'src/hooks/useBreakpoint';
import gamesData from '../../content/gamesData.json';
import gameContent from '../../content/game.json';

const game = gameContent;

const Game = () => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobileOrTablet =
    currentBreakpoint === 'mobile' || currentBreakpoint === 'tablet';  
  const games = useMemo(() => [...gamesData], []);

  const formsSrc = isMobileOrTablet
    ? game.forms.mobile
    : game.forms.desktop;
  const formsWidth = isMobileOrTablet ? 611 : 1440;
  const formsHeight = isMobileOrTablet ? 60.13 : 112.38;

  return (
    <section className={styles.game}>
      <div className={styles['game-container']}>
        <section className={styles.header}>
          <Image
            width={isMobileOrTablet ? 26 : 32}
            height={isMobileOrTablet ? 26 : 32}
            src={game.icon}
            alt={game.iconAlt}
          />
          <div className={styles['section-title']}>
            <h3 className={styles['section-title-one']}>
              {game.titleOne.replace(/\\n/g, '\n')}&nbsp;
            </h3>
            <h3 className={styles['section-title-two']}>
              {game.titleTwo.replace(/\\n/g, '\n')}
            </h3>
          </div>
          <p className={styles['game-p']}>
            {game.description.replace(/\\n/g, '\n')}
          </p>
        </section>
        <div className={styles.carousel}>
          <Carousel
            games={games}
          />
        </div>
        <Button
          variant='link'
          arrowRight
          className={styles.link}
        >
          {game.buttonLabel}
        </Button>
      </div>
      <Image
        width={formsWidth}
        height={formsHeight}
        src={formsSrc}
        alt={game.waveAlt}
        style={{ width: '100%', height: 'auto' }}
      />
    </section>
  );
};

export default Game;
