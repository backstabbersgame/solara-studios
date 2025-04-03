import React from 'react';
import Image from 'next/image';
import styles from './Store.module.scss';
import useBreakpoint from 'src/hooks/useBreakpoint';

const Store = () => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobileOrTablet =
    currentBreakpoint === 'mobile' || currentBreakpoint === 'tablet';

  const collectiblesSrc = isMobileOrTablet
    ? '/images/mobile/collectibles.png'
    : '/images/desktop/collectibles.png';
  const collectiblesWidth = isMobileOrTablet ? 320 : 632;
  const collectiblesHeight = isMobileOrTablet ? 210 : 418;

  const boardgamesSrc = isMobileOrTablet
    ? '/images/mobile/boardgames.png'
    : '/images/desktop/boardgames.png';
  const boardgamesWidth = isMobileOrTablet ? 320 : 632;
  const boardgamesHeight = isMobileOrTablet ? 210 : 418;

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
                <p className={styles.p}>
                  COMPRA 100% SEGURA
                  <br />
                  <p>Lorem ipsum dolor</p>
                </p>
              </div>
              <hr className={styles.line} />
              <div className={styles.payment}>
                <Image
                  width={24}
                  height={24}
                  src='/images/credit-card.svg'
                  alt='Cartão de crédito'
                />
                <p className={styles.p}>
                  PAGUE COMO QUISER
                  <br />
                  <p>Lorem ipsum dolor</p>
                </p>
              </div>
              <hr className={styles.line} />
              <div className={styles.payment}>
                <Image
                  width={24}
                  height={24}
                  src='/images/truck.svg'
                  alt='Caminhão'
                />
                <p className={styles.p}>
                  ENTREGA PARA TODO BRASIL
                  <br />
                  <p>Lorem ipsum dolor</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Store;
