import React from 'react';
import styles from './BreakpointTracker.module.scss';
import { useBreakpoint } from '../../hooks/useBreakpoint';

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
  wideScreen: '1441px',
  ultraWideScreen: '1513px',
};

const BreakpointTracker = () => {
  const { windowWidth, currentBreakpoint } = useBreakpoint();

  return (
    <>
      <div className={styles.breakpointTracker}>
        <h2 className={styles.currentBreakpoint}>
          Current breakpoint: <strong>{currentBreakpoint}</strong> (
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
