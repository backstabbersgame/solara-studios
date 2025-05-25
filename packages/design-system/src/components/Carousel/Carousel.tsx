import React, { useState, useEffect, useCallback, Dispatch } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Carousel.module.scss';
import { CaretRight } from '@phosphor-icons/react/dist/ssr';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import GameCard from '../GameCard/GameCard';
import { GameData } from '../../types/interfaces';

interface CarouselProps {
  games: GameData[];
  autoPlay?: boolean;
  interval?: number;
  // activeIndex: number;
  // setActiveIndex: Dispatch<React.SetStateAction<number>>;
}

const Carousel = ({
  games,
  autoPlay = true,
  interval = 5000,
  // activeIndex,
  // setActiveIndex,
}: CarouselProps) => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';
  const isNotMobileAndisNotTablet = !isMobile && !isTablet;
  const [isPaused, setIsPaused] = useState(false);
  const [containerHeight, setContainerHeight] = useState<number | undefined>(
    undefined
  );
  const [gameCardHeight, setGameCardHeight] = useState<number | undefined>(
    undefined
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const handleGameCardHeightChange = useCallback((height: number) => {
    setGameCardHeight(height);
  }, []);

  useEffect(() => {
    if (gameCardHeight !== undefined) {
      setContainerHeight(gameCardHeight);
    }
  }, [gameCardHeight]);

  useEffect(() => {
    if (!autoPlay || isPaused || activeIndex === undefined || !setActiveIndex)
      return;

    const timer = setInterval(() => {
      const nextIndex = (activeIndex + 1) % games.length;
      setActiveIndex(nextIndex);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, isPaused, games.length, setActiveIndex]);

  
  const goToNext = () => {
    if (activeIndex !== undefined && setActiveIndex) {
      const nextIndex = (activeIndex + 1) % games.length;
      setActiveIndex(nextIndex);
    }
  };

  return (
    <div
      className={styles.carouselWrapper}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchCancel={() => setIsPaused(false)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div
        className={styles.carouselContainer}
        style={containerHeight ? { height: `${containerHeight}px` } : {}}
      >
        <AnimatePresence mode='popLayout'>
          <motion.div
            key={games[activeIndex].id}
            initial={{ opacity: 0, x: '50%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-50%' }}
            transition={{ duration: 0.4 }}
            className={styles.carouselItem}
          >
            <GameCard
              id={games[activeIndex].id}
              images={games[activeIndex].images}
              details={games[activeIndex].details}
              buttonText={games[activeIndex].buttonText}
              name={games[activeIndex].name}
              onHeightChange={handleGameCardHeightChange}
            />

            {isNotMobileAndisNotTablet && (
              <button
                onClick={() => {
                  setIsPaused(true);
                  goToNext();
                }}
                className={styles.carouselNext}
                style={
                  containerHeight ? { height: `${containerHeight}px` } : {}
                }
                aria-label='Próximo item'
                // onMouseEnter={() => setIsPaused(true)}
              >
                <CaretRight size={32} />
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Carousel;
