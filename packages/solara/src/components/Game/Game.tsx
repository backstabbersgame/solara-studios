import React from 'react';
import styles from './Game.module.scss';
import Image from 'next/image';
import { Button } from '@solara-studios/design-system/src';
import useBreakpoint from 'src/hooks/useBreakpoint';
import VerticalButton from 'src/components/VerticalButton/VerticalButton';

const Game = () => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobileOrTablet =
    currentBreakpoint === 'mobile';// || currentBreakpoint === 'tablet';
  const imageSrc = isMobileOrTablet
    ? '/images/mobile/backstabbers-expansion.svg'
    : '/images/desktop/backstabbers-expansion.svg';
  const imageWidth = isMobileOrTablet ? 320 : 620;
  const imageHeight = isMobileOrTablet ? 285 : 394;

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
        <div className={styles['game-content']}>
          <Image
            width={imageWidth}
            height={imageHeight}
            src={imageSrc}
            alt='Capa de expanções Backstabbers'
            className={styles.image}
          />

          <div className={styles['details-container']}>
            <div className={styles['detail']}>
              <Image
                width={32}
                height={32}
                src='/images/sketch-logo.svg'
                alt='Diamante com gradiente'
              />
              <div>
                <h4 className={styles['detail-title']}>
                  Mais de 300 cópias vendidas
                </h4>
                <p className={styles['detail-p']}>
                  {`Lorem ipsum dolor sit amet consectetur. Sit aliquet
                  elementum enim sed sed tristique fringilla.`}
                </p>
              </div>
            </div>
            <hr className={styles.line} />
            <div className={styles['detail']}>
              <Image
                width={32}
                height={32}
                src='/images/sword.svg'
                alt='Diamante com gradiente'
              />
              <div>
                <h4 className={styles['detail-title']}>4 modos de jogo</h4>
                <p className={styles['detail-p']}>
                  {`Lorem ipsum dolor sit amet consectetur. Sit aliquet
                  elementum enim sed sed tristique fringilla.`}
                </p>
              </div>
            </div>
            <hr className={styles.line} />
            <div className={styles['detail']}>
              <Image
                width={32}
                height={32}
                src='/images/heart.svg'
                alt='Diamante com gradiente'
              />
              <div>
                <h4 className={styles['detail-title']}>3 expansões</h4>
                <p className={styles['detail-p']}>
                  {`Lorem ipsum dolor sit amet consectetur. Sit aliquet
                  elementum enim sed sed tristique fringilla.`}
                </p>
              </div>
            </div>

            <Button
              variant='tertiary'
              className={styles.btn}
            >
              Detalhes do jogo
            </Button>
          </div>
          {!isMobileOrTablet && <VerticalButton />}
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
