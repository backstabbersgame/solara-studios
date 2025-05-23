'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Store.module.scss';
import useBreakpoint from 'src/hooks/useBreakpoint';

const Store = () => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isMobileOrTablet = isMobile || currentBreakpoint === 'tablet';

  const collectiblesSrc = isMobile
    ? '/images/mobile/collectibles.png'
    : '/images/desktop/collectibles.png';
  const collectiblesWidth = isMobile ? 320 : 632;
  const collectiblesHeight = isMobile ? 210 : 418;

  const boardgamesSrc = isMobile
    ? '/images/mobile/boardgames.png'
    : '/images/desktop/boardgames.png';
  const boardgamesWidth = isMobile ? 320 : 632;
  const boardgamesHeight = isMobile ? 210 : 418;

  return (
    <>
      <section className={styles.store}>
        <div className={styles['store-container']}>
          <header className={styles['store-header']}>
            <Image
              width={isMobileOrTablet ? 24 : 32}
              height={isMobileOrTablet ? 24 : 32}
              src='/images/shopping-cart.svg'
              alt='Carinho de compras'
            />
            <div className={styles['section-title']}>
              <h2 className={styles['section-title-one']}>
                Novidades na &nbsp;
              </h2>
              <h2 className={styles['section-title-two']}>lojinha</h2>
              <h2>!</h2>
            </div>
          </header>
          <div className={styles['store-content']}>
            <div className={styles['store-merch']}>
              <Image
                width={collectiblesWidth}
                height={collectiblesHeight}
                src={collectiblesSrc}
                alt='Colecionáveis: bottons, camisetas e ecobags'
                className={styles.merch}
              />
              <Image
                width={boardgamesWidth}
                height={boardgamesHeight}
                src={boardgamesSrc}
                alt='Caixa do jogo Backstabbers'
                className={styles.merch}
              />
            </div>
            <div className={styles['store-payments']}>
              {!isMobileOrTablet && <hr className={styles.line} />}
              <div className={styles.payment}>
                <Image
                  width={24}
                  height={24}
                  src='/images/lock-key.svg'
                  alt='Cadeado'
                />
                <div>
                  <p className={styles.p}>COMPRA 100% SEGURA</p>
                  <p className={styles.subp}>Lorem ipsum dolor</p>
                </div>
              </div>
              <hr className={styles.line} />
              <div className={styles.payment}>
                <Image
                  width={24}
                  height={24}
                  src='/images/credit-card.svg'
                  alt='Cartão de crédito'
                />
                <div>
                  <p className={styles.p}>PAGUE COMO QUISER</p>
                  <p className={styles.subp}>Lorem ipsum dolor</p>
                </div>
              </div>
              <hr className={styles.line} />
              <div className={styles.payment}>
                <Image
                  width={24}
                  height={24}
                  src='/images/truck.svg'
                  alt='Caminhão'
                />
                <div>
                  <p className={styles.p}>ENTREGA PARA TODO BRASIL</p>
                  <p className={styles.subp}>Lorem ipsum dolor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Store;
