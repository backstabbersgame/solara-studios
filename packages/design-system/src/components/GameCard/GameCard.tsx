import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './GameCard.module.scss';
import { Button } from '../Button/Button';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { motion } from 'framer-motion';

interface ResponsiveImage {
  src: string;
  width: number;
  height: number;
}

interface GameDetail {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}
interface GameCardProps {
  id: number;
  images: {
    mobile: ResponsiveImage;
    desktop: ResponsiveImage;
  };
  details: GameDetail[];
  buttonText?: string;
  name: string;
  onHeightChange?: (height: number) => void;
}

const GameCard = ({
  id,
  images,
  details,
  buttonText = 'Detalhes do jogo',
  name,
  onHeightChange,
}: GameCardProps) => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';
  const isNotMobileAndisNotTablet = !isMobile && !isTablet;
  const currentImage = isMobile ? images.mobile : images.desktop;
  const detailsRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (isNotMobileAndisNotTablet) {
      const updateHeight = () => {
        const detailsCurrentHeight = detailsRef.current?.offsetHeight;

        if (detailsCurrentHeight && imageRef.current) {
          imageRef.current.style.height = `${detailsCurrentHeight}px`;
        }
        if (containerRef.current && onHeightChange) {
          onHeightChange(containerRef.current.offsetHeight);
        }
      };

      updateHeight();
      window.addEventListener('resize', updateHeight);

      return () => {
        window.removeEventListener('resize', updateHeight);
      };
    } else {
      if (imageRef.current) {
        imageRef.current.style.height = '';
      }
      if (containerRef.current && onHeightChange) {
        onHeightChange(containerRef.current.offsetHeight);
      }
    }
    const timeoutId = setTimeout(() => {
      if (containerRef.current && onHeightChange) {
        onHeightChange(containerRef.current.offsetHeight);
      }
    }, 50);
    return () => clearTimeout(timeoutId);
  }, [isNotMobileAndisNotTablet, onHeightChange]);

  return (
    <div
      className={styles['game-container']}
      ref={containerRef}
    >
      <div className={styles['game-content']}>
        <motion.div
          className={styles['game-image']}
          ref={imageRef}
          initial={{ opacity: 0, x: '50%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '-50%' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <Image
            width={currentImage.width}
            height={currentImage.height}
            src={currentImage.src}
            alt={`Capa do jogo ${name}`}
            className={styles.image}
            priority={true}
            onLoad={() => {
              if (containerRef.current && onHeightChange) {
                onHeightChange(containerRef.current.offsetHeight);
              }
            }}
          />
        </motion.div>
        <motion.div
          className={styles['details-container']}
          ref={detailsRef}
          initial={{ opacity: 0, x: '50%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '-50%' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {details.map((detail, index) => (
            <>
              <div key={`${name}-detail-${index}`}>
                <div className={styles.detail}>
                  <Image
                    width={32}
                    height={32}
                    src={detail.iconSrc}
                    alt={detail.iconAlt}
                  />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    <h4 className={styles['detail-title']}>{detail.title}</h4>
                    <p className={styles['detail-p']}>{detail.description}</p>
                  </div>
                </div>
              </div>
              {index < details.length - 1 && <hr className={styles.line} />}
            </>
          ))}

          <Button
            variant='tertiary'
            className={styles.btn}
          >
            {buttonText}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default GameCard;
