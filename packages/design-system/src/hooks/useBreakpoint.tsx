import React, { useEffect, useState } from 'react';

const breakpoints = {
  mobile: '767px',
  tablet: {
    min: '768px',
    max: '1032px',
  },
  laptop: {
    min: '1033px',
    max: '1280px',
  },
  desktop: {
    min: '1281px',
    max: '1440px',
  },
  wideDesktop: '1441px',
};

const getBreakpoint = (width: number): string => {
  if (width >= parseInt(breakpoints.wideDesktop)) {
    return 'wide desktop';
  }
  if (
    width >= parseInt(breakpoints.desktop.min) &&
    width <= parseInt(breakpoints.desktop.max)
  ) {
    return 'desktop';
  }
  if (
    width >= parseInt(breakpoints.laptop.min) &&
    width <= parseInt(breakpoints.laptop.max)
  ) {
    return 'laptop';
  }
  if (
    width >= parseInt(breakpoints.tablet.min) &&
    width <= parseInt(breakpoints.tablet.max)
  ) {
    return 'tablet';
  }
  if (width <= parseInt(breakpoints.mobile)) {
    return 'mobile';
  }
  return 'unknown';
};

export const useBreakpoint = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>(
    getBreakpoint(window.innerWidth)
  );

  useEffect(() => {
    const updateWindowWidth = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      setCurrentBreakpoint(getBreakpoint(newWidth));
    };

    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  return {
    windowWidth,
    currentBreakpoint,
  };
};
