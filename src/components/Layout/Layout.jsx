import React, { useState } from 'react';

import Filters from '../Filters/Filters.jsx';
import Tickets from '../Tickets/Tickets.jsx';

import styles from './Layout.module.scss';

const Layout = () => {
  const [filters, setFilters] = useState(null);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className={styles.layout}>
      <Filters onFilterChange={handleFilterChange} />
      <Tickets filters={filters} />
    </div>
  );
};

export default Layout;
