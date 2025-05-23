'use client';

import React from 'react';
import styles from './Newsletter.module.scss';
import { Button, InputText } from '@solara-studios/design-system/src';
import Image from 'next/image';
import useBreakpoint from 'src/hooks/useBreakpoint';

const Newsletter = () => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';

  const imageSrc = isMobile
    ? '/images/mobile/dealer.png'
    : '/images/desktop/dealer.png';
  const imageWidth = isMobile ? 320 : 620;
  const imageHeight = isMobile ? 285 : 394;

  return (
    <section className={styles.newsletter}>
      <div className={styles['newsletter-container']}>
        <div className={styles['newsletter-content']}>
          <div className={styles['newsletter-title']}>
            <h1 className={styles.header}>Fique por dentro etc etc</h1>
            <p className={styles.p}>
              {isMobile
                ? `Lorem ipsum dolor sit amet consectetur.
            Sit aliquet elementum enim sed sed
            tristique fringilla.`
                : `Lorem ipsum dolor sit amet consectetur. Sit aliquet
            elementum enim sed sed tristique fringilla.`}
            </p>
          </div>
          <InputText
            placeholder='E-mail*'
            className={styles.email}
          />

          <Button
            variant='secondary'
            className={styles.btn}
          >
            Assinar a newsletter
            <Image
              width={24}
              height={24}
              src='/images/paper-plane.svg'
              alt='Avião de papel'
              className={styles.icon}
            />
          </Button>
        </div>
        <Image
          width={imageWidth}
          height={imageHeight}
          src={imageSrc}
          alt='Personagem'
          className={styles.dealer}
        />
      </div>
    </section>
  );
};

export default Newsletter;
