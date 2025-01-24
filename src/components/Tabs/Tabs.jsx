import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../../features/tabsSlice';
import styles from './Tabs.module.scss';

const Tabs = () => {
  const activeTab = useSelector((state) => state.tabs.activeTab); // Берем активный таб из Redux
  const dispatch = useDispatch();

  const tabs = [
    { id: 'cheap', label: 'Самый дешевый' },
    { id: 'fast', label: 'Самый быстрый' },
    { id: 'optimal', label: 'Оптимальный' },
  ];

  const handleTabChange = (tabId) => {
    dispatch(setActiveTab(tabId)); // Изменяем активный таб через Redux
  };

  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`${styles.tabs__button} ${activeTab === tab.id ? styles.tabs__button_active : ''}`}
          onClick={() => handleTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
