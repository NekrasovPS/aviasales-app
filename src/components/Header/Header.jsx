import React from 'react';
import styles from './Header.module.scss';

import logo from '../Header/images/airplane-icon.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Airplane Icon" className={styles.header__icon} />
    </header>
  );
};

export default Header;
