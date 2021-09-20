import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/Card.module.css';

export const Card = ({ image, title, profilePic, name, readTime }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={image} alt={title} width="85" height="116" />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>
          <a href="https://leonidasesteban.com/blog">{title}</a>
        </h3>

        <div className={styles.cardInfo}>
          <div className={styles.profilePicture}>
            <img src={profilePic} alt={name} width="16" height="16" />
          </div>

          <small className={styles.name}> {name} </small>
          <span className={styles.circle} aria-hidden="true"></span>

          <small className={styles.readTime}>{readTime} read</small>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
};
