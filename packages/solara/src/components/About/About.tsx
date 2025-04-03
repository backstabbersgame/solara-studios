import React from 'react';
import Image from 'next/image';
import styles from './About.module.scss';
import { Button } from '@solara-studios/design-system/src';
import useBreakpoint from 'src/hooks/useBreakpoint';

const About = () => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobileOrTablet =
    currentBreakpoint === 'mobile' || currentBreakpoint === 'tablet';

  return (
    <>
      <section className={styles.about}>
        <div className={styles['about-container']}>
          <header className={styles['about-header']}>
            <Image
              width={isMobileOrTablet ? 24 : 32}
              height={isMobileOrTablet ? 24 : 32}
              src='/images/planet.svg'
              alt='Planeta'
            />
            <div className={styles['section-title']}>
              <h2 className={styles['section-title-one']}>Quem faz a &nbsp;</h2>
              <h2 className={styles['section-title-two']}>Solara</h2>
              <h2>?</h2>
            </div>
          </header>
          <div className={styles['about-content']}>
            <div className={styles.picture}>
              <Image
                width={isMobileOrTablet ? 356.64 : 524}
                height={isMobileOrTablet ? 237.56 : 288}
                src='/images/people.png'
                alt='Pessoas abraçadas sorrindo'
              />
            </div>
            <div className={styles['about-side']}>
              <p className={styles['about-p']}>
                {`Em 2019, um grupo de amigos se vê diante de uma ideia que tinha crescido para
                além deles. Juntando o desejo de criar uma experiência divertida entre amigos e a
                vontade de representar o mercado de jogos pernambucanos no Brasil, nasce a `}<strong>Solara</strong>{`, 
                um estúdio de jogos que tem como foco a diversão, a diversidade e a representatividade.`}
              </p>
              <div className={styles['about-data']}>
                <div className={styles.data}>
                  <h2>+10k</h2>
                  <h4>Lorem ipsum dolor</h4>
                </div>
                <div className={styles.data}>
                  <h2>15k</h2>
                  <h4>Lorem ipsum dolor</h4>
                </div>
                <div className={styles.data}>
                  <h2>+45k</h2>
                  <h4>Lorem ipsum dolor</h4>
                </div>
              </div>
              <Button
                variant='secondary'
                className={styles.btn}
              >
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
