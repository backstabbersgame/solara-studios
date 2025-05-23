'use client';

import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import { Button } from '@solara-studios/design-system/src';
import {
  Bag,
  Chats,
  HourglassLow,
  InstagramLogo,
  Question,
  ShoppingCart,
  Sword,
  ThumbsUp,
  TiktokLogo,
  Truck,
  UsersThree,
  YoutubeLogo,
} from '@phosphor-icons/react/dist/ssr';
import useBreakpoint from 'src/hooks/useBreakpoint';

const Footer = () => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isMobileOrTablet = isMobile || currentBreakpoint === 'tablet';

  return (
    <section className={styles.footer}>
      <div className={styles['footer-container']}>
        <div className={styles['footer-content']}>
          <div className={styles.logo}>
            {isMobileOrTablet ? (
              <Image
                src={'/images/solara-horizontal-light.svg'}
                alt={'Solara logo'}
                width={172.7}
                height={48}
              />
            ) : (
              <Image
                src={'/images/solara-light.svg'}
                alt={'Solara logo'}
                width={158.82}
                height={169}
              />
            )}
          </div>
          <div className={styles.right}>
            <section className={styles.ajuda}>
              <h4 className={styles.h4}>Ajuda</h4>
              <div className={styles.links}>
                <Button
                  variant='link'
                  className={styles.button}
                >
                  <Chats size={24} />
                  Fale com a gente
                </Button>
                <Button
                  variant='link'
                  className={styles.button}
                >
                  <Bag size={24} />
                  Quero vender
                </Button>
                <Button
                  variant='link'
                  className={styles.button}
                >
                  <Truck size={24} />
                  Política de frete
                </Button>
              </div>
            </section>
            <section className={styles.produtos}>
              <h4 className={styles.h4}>Produtos</h4>
              <div className={styles.links}>
                <Button
                  variant='link'
                  className={styles.button}
                >
                  <Sword size={24} />
                  Nossos jogos
                </Button>
                <Button
                  variant='link'
                  className={styles.button}
                >
                  <HourglassLow size={24} />
                  Em breve!
                </Button>
                <Button
                  variant='link'
                  className={styles.button}
                >
                  <ShoppingCart size={24} />
                  Lojinha
                </Button>
              </div>
            </section>
            <section className={styles.solara}>
              <h4 className={styles.h4}>Solara</h4>
              <div className={styles.links}>
                <Button
                  variant='link'
                  className={styles.button}
                >
                  <UsersThree size={24} />
                  Quem somos
                </Button>
                <Button
                  variant='link'
                  className={styles.button}
                >
                  <ThumbsUp size={24} />
                  Parcerias
                </Button>
                <Button
                  variant='link'
                  className={styles.button}
                >
                  <Question size={24} />
                  FAQ
                </Button>
              </div>
            </section>
            <section className={styles.sociais}>
              <h4 className={styles.h4}>Redes sociais</h4>
              <div className={styles.links}>
                <Button
                  variant='link'
                  className={styles.button}
                >
                  <InstagramLogo size={24} />
                  Instagram
                </Button>
                <Button
                  variant='link'
                  className={styles.button}
                >
                  <YoutubeLogo size={24} />
                  YouTube
                </Button>
                <Button
                  variant='link'
                  className={styles.button}
                >
                  <TiktokLogo size={24} />
                  Tik Tok
                </Button>
              </div>
            </section>
          </div>
        </div>
        <section className={styles.brand}>
          <div className={styles['brand-buttons']}>
            <Button
              className={styles['brand-btn']}
              variant='link'
            >
              Privacidade
            </Button>
            <Button
              className={styles['brand-btn']}
              variant='link'
            >
              Termos de Uso
            </Button>
          </div>
          <span className={styles.copyright}>
            Copyright 2025 © Solara Studios
          </span>
        </section>
      </div>
    </section>
  );
};

export default Footer;
