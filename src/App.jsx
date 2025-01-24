// src/App.js
import React from 'react';
import Header from './components/Header/Header.jsx';
import Layout from './components/Layout/Layout.jsx';
import styles from './styles/App.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Layout />
    </div>
  );
};

export default App;
