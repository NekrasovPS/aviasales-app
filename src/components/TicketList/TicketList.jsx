import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTicketsAsync } from '../../features/ticketsSlice';
import Ticket from '../Ticket/Ticket.jsx';
import styles from './TicketList.module.scss';

const TicketList = () => {
  const { tickets, loading, allLoaded } = useSelector((state) => state.tickets);
  const filters = useSelector((state) => state.filters);
  const activeTab = useSelector((state) => state.tabs.activeTab); // Активный таб из Redux
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTicketsAsync());
  }, [dispatch]);

  const applyFilters = (ticket) => {
    const transferFilters = {
      noTransfers: ticket.segments[0].stops.length === 0,
      oneTransfer: ticket.segments[0].stops.length === 1,
      twoTransfers: ticket.segments[0].stops.length === 2,
      threeTransfers: ticket.segments[0].stops.length === 3,
    };

    if (filters.all) return true;
    return (
      (filters.noTransfers && transferFilters.noTransfers) ||
      (filters.oneTransfer && transferFilters.oneTransfer) ||
      (filters.twoTransfers && transferFilters.twoTransfers) ||
      (filters.threeTransfers && transferFilters.threeTransfers)
    );
  };

  const sortTickets = (tickets) => {
    switch (activeTab) {
      case 'cheap':
        return tickets.sort((a, b) => a.price - b.price);
      case 'fast':
        return tickets.sort((a, b) => {
          const aDuration =
            a.segments[0].duration + (a.segments[1]?.duration || 0);
          const bDuration =
            b.segments[0].duration + (b.segments[1]?.duration || 0);
          return aDuration - bDuration;
        });
      case 'optimal':
        return tickets.sort((a, b) => {
          const aScore =
            a.price + (a.segments[0].duration + a.segments[1]?.duration) / 1000;
          const bScore =
            b.price + (b.segments[0].duration + b.segments[1]?.duration) / 1000;
          return aScore - bScore;
        });
      default:
        return tickets;
    }
  };

  const filteredTickets = tickets.filter(applyFilters);
  const sortedTickets = sortTickets([...filteredTickets]); // Копируем массив перед сортировкой

  return (
    <div className={styles.ticketList}>
      {loading && tickets.length === 0 ? (
        <p>Загрузка билетов...</p>
      ) : filteredTickets.length === 0 ? (
        <p>Рейсов, подходящих под заданные фильтры, не найдено</p>
      ) : (
        sortedTickets.map((ticket, index) => (
          <Ticket key={index} ticket={ticket} />
        ))
      )}
      {!allLoaded && (
        <button
          className={styles.loadMore__button}
          onClick={() => dispatch(loadTicketsAsync())}
          disabled={loading}
        >
          {loading ? 'Загрузка...' : 'Показать ещё 5 билетов!'}
        </button>
      )}
    </div>
  );
};

export default TicketList;
