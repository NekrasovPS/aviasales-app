import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter } from '../../features/filtersSlice';
import styles from './Filters.module.scss';

const Filters = () => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleToggle = (filter) => {
    dispatch(toggleFilter(filter));
  };

  return (
    <div className={styles.filter}>
      <h3 className={styles.filter__title}>Количество пересадок</h3>
      <label className={styles.filter__option}>
        <input
          type="checkbox"
          checked={filters.all}
          onChange={() => handleToggle('all')}
        />
        <span className={styles.filter__checkbox}></span> Все
      </label>
      <label className={styles.filter__option}>
        <input
          type="checkbox"
          checked={filters.noTransfers}
          onChange={() => handleToggle('noTransfers')}
        />
        <span className={styles.filter__checkbox}></span> Без пересадок
      </label>
      <label className={styles.filter__option}>
        <input
          type="checkbox"
          checked={filters.oneTransfer}
          onChange={() => handleToggle('oneTransfer')}
        />
        <span className={styles.filter__checkbox}></span> 1 пересадка
      </label>
      <label className={styles.filter__option}>
        <input
          type="checkbox"
          checked={filters.twoTransfers}
          onChange={() => handleToggle('twoTransfers')}
        />
        <span className={styles.filter__checkbox}></span> 2 пересадки
      </label>
      <label className={styles.filter__option}>
        <input
          type="checkbox"
          checked={filters.threeTransfers}
          onChange={() => handleToggle('threeTransfers')}
        />
        <span className={styles.filter__checkbox}></span> 3 пересадки
      </label>
    </div>
  );
};

export default Filters;
