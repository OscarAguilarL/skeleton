import React from 'react';

import styles from '../styles/SkeletonCard.module.css';

export const SkeletonCard = () => {
  return (
    <div className={(styles.skeletonCard)}>
      <div className={(styles.skeletonImg)}></div>
      <div className={styles.skeletonCardContent}>
        <div className={(styles.skeletonCardTitle)}></div>
        <div className={styles.skeletonCardInfo}>
          <div
            className={(styles.skeletonProfilePicture)}
          ></div>
          <div className={(styles.skeletonCardName)}></div>
          <div className={styles.circle}></div>
          <div className={(styles.skeletonCardReadTime)}></div>
        </div>
      </div>
    </div>
  );
};
