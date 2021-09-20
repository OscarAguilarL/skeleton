import React from 'react';

import styles from '../styles/Header.module.css';

import logo from '../assets/logo.png';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerImage}>
        <img src={logo} alt="Logo" width="80" height="80" />
      </div>
      <div className={styles.headerTitle}>
        <a href="https://leonidasesteban.com/" target="_blank">
          leonidas esteban.com
        </a>
      </div>
    </header>
  );
};
