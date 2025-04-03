'use client';

import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import { Button } from '@solara-studios/design-system/src';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles['hero-side']}>
        <section className={styles['hero-content']}>
          <h1 className={styles['hero-title']}>
            {`Lorem ipsum dolor
          sit amet consect`}
          </h1>
          <p className={styles['hero-p']}>
            {`Lorem ipsum dolor sit amet consectetur. Sit aliquet
            elementum enimsed sed tristique fringilla phasellus. Sit
            aliquet elementum enim.`}
          </p>
        </section>
        <section className={styles['hero-buttons']}>
          <Button
            variant='primary'
            className={styles.btn}
          >
            Label
          </Button>
          <Button
            variant='tertiary'
            className={styles.btn}
          >
            Label
          </Button>
        </section>
      </div>
      <section className={styles['hero-characters']}>
        <Image
          src='/images/characters.png'
          alt={'Characters'}
          width={748}
          height={737}
          placeholder='blur'
          blurDataURL={'/images/characters.png'}
          className={styles.characters}
        />
      </section>
    </div>
  );
};
export default Hero;
