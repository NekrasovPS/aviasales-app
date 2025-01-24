// src/components/LoadMore/LoadMore.jsx
import React from 'react';
import styles from './LoadMore.module.scss';

const LoadMore = ({ onLoadMore }) => {
  return (
    <div className={styles.loadMore}>
      <button className={styles.loadMore__button} onClick={onLoadMore}>
        Показать ещё 5 билетов!
      </button>
    </div>
  );
};

export default LoadMore;
