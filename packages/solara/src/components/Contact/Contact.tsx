'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Contact.module.scss';
import useBreakpoint from 'src/hooks/useBreakpoint';
import {
  Button,
  InputSelect,
  InputText,
  InputTextArea,
  Upload,
} from '@solara-studios/design-system/src';
import {
  At,
  Heart,
  InstagramLogo,
  TiktokLogo,
  YoutubeLogo,
} from '@phosphor-icons/react/dist/ssr';

const Contact = () => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isMobileOrTablet = isMobile || currentBreakpoint === 'tablet';

  const [value, setValue] = useState('');
  const charCount = value.length;

  const options = [
    { value: '', label: 'Eu sou...', disabled: true },
    { value: '1', label: 'Artista' },
    { value: '2', label: 'Cliente' },
    { value: '3', label: 'Designer' },
    { value: '4', label: 'Imprensa' },
    { value: '5', label: 'Logista' },
    { value: '6', label: 'Tabuleria' },
  ];

  return (
    <section className={styles.contact}>
      <div className={styles['contact-container']}>
        <header className={styles['contact-header']}>
          <Image
            width={isMobileOrTablet ? 24 : 32}
            height={isMobileOrTablet ? 24 : 32}
            src='/images/envelope-simple.svg'
            alt='Envelope'
          />
          <div className={styles['section-title']}>
            <h2 className={styles.header}>Entre em contato</h2>
            <p className={styles.p}>
              Lorem ipsum dolor sit amet consectetur. Sit aliquet elementum enim
              sed sed tristique fringilla.
            </p>
          </div>
        </header>
        <section className={styles['contact-form']}>
          <div className={styles['contact-inputs']}>
            <div className={styles['contact-inputs-1']}>
              <InputText
                placeholder='Nome*'
                className={styles.nome}
              />
              <InputText
                placeholder='E-mail*'
                className={styles.email}
              />
            </div>
            <div className={styles['contact-inputs-2']}>
              <InputSelect
                options={options}
                className={styles.eusou}
              />
              <InputText
                placeholder='Assunto'
                className={styles.assunto}
              />
            </div>
          </div>
          <InputTextArea
            placeholder='Mensagem*'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={styles.mensagem}
          />
          <Upload className={styles.upload} />
          <div className={styles['submit-container']}>
            <Button
              className={styles.submit}
              arrowRight
            >
              Enviar
            </Button>
          </div>
        </section>
        <section className={styles.community}>
          <div>
            <Heart
              size={24}
              className={styles.heart}
            />
            <h4 className={styles.h4}>Entre para nossa comunidade</h4>
          </div>
          <Button
            variant='secondary'
            className={styles['community-btn']}
          >
            Entrar na comunidade
          </Button>
        </section>
        <section className={styles.socials}>
          <div className={styles['socials-header']}>
            <At
              size={24}
              className={styles.at}
            />
            <h4 className={styles.h4}>Siga nossas redes etc</h4>
          </div>
          <div className={styles.links}>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles['social-link']}
            >
              <InstagramLogo
                size={24}
                className={styles.instagram}
              />
            </a>
            <a
              href='https://www.youtube.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles['social-link']}
            >
              <YoutubeLogo
                size={24}
                className={styles.youtube}
              />
            </a>
            <a
              href='https://www.tiktok.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles['social-link']}
            >
              <TiktokLogo
                size={24}
                className={styles.tiktok}
              />
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
