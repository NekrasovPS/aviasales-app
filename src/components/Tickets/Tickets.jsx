// src/components/Tickets/Tickets.jsx
import React, { useState } from 'react';
import Tabs from '../Tabs/Tabs.jsx';
import TicketList from '../TicketList/TicketList.jsx';
import styles from './Tickets.module.scss';

const Tickets = () => {
  const [activeTab, setActiveTab] = useState('cheap'); // По умолчанию "Самый дешевый"

  const handleTabChange = (tabId) => {
    setActiveTab(tabId); // Обновляем активную вкладку
  };

  return (
    <div className={styles.tickets}>
      <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
      <TicketList activeTab={activeTab} />
    </div>
  );
};

export default Tickets;
