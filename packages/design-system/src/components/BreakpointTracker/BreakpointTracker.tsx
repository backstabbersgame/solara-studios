import React, { useEffect, useState } from 'react';
import styles from './BreakpointTracker.module.scss';

const breakpoint = {
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

const BreakpointTracker = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const getCurrentBreakpoint = () => {
    if (windowWidth >= parseInt(breakpoint.wideDesktop)) {
      return 'wide desktop';
    } else if (
      windowWidth >= parseInt(breakpoint.desktop.min) &&
      windowWidth <= parseInt(breakpoint.desktop.max)
    ) {
      return 'desktop';
    } else if (
      windowWidth >= parseInt(breakpoint.laptop.min) &&
      windowWidth <= parseInt(breakpoint.laptop.max)
    ) {
      return 'laptop';
    } else if (
      windowWidth >= parseInt(breakpoint.tablet.min) &&
      windowWidth <= parseInt(breakpoint.tablet.max)
    ) {
      return 'tablet';
    } else if (windowWidth <= parseInt(breakpoint.mobile)) {
      return 'mobile';
    }
  };

  return (
    <>
      <div className={styles.breakpointTracker}>
        <h2 className={styles.currentBreakpoint}>
          Current breakpoint: <strong>{getCurrentBreakpoint()}</strong> (
          {windowWidth}px)
        </h2>
      </div>
      <br />
      <br />
      <div className={styles.fixedBreakpoints}>
        <h4>Breakpoints:</h4>
        <ul>
          {Object.entries(breakpoint).map(([name, value]) => {
            if (typeof value === 'string') {
              return (
                <li key={name}>
                  {name}: {value}
                </li>
              );
            } else {
              return (
                <li key={name}>
                  {name}: {value.min} - {value.max}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
};

export default BreakpointTracker;
