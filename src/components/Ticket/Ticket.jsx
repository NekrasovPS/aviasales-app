// src/components/Ticket/Ticket.jsx
import React from 'react';
import styles from './Ticket.module.scss';

const Ticket = ({ ticket }) => {
  const { price, segments } = ticket;

  return (
    <div className={styles.ticket}>
      <div className={styles.ticket__price}>
        <span>{price.toLocaleString()} P</span>
        <img
          src={`https://pics.avs.io/99/36/${ticket.carrier}.png`}
          alt="Airlines Logo"
          className={styles.ticket__logo}
        />
      </div>
      <div className={styles.ticket__details}>
        {segments.map((segment, index) => (
          <div key={index} className={styles.ticket__row}>
            <div className={styles.ticket__col}>
              <span>
                {segment.origin} – {segment.destination}
              </span>
              <p>
                {formatTime(segment.date)} –{' '}
                {formatTime(calculateArrival(segment))}
              </p>
            </div>
            <div className={styles.ticket__col}>
              <span>В пути</span>
              <p>{formatDuration(segment.duration)}</p>
            </div>
            <div className={styles.ticket__col}>
              <span>{getStopsLabel(segment.stops.length)}</span>
              <p>{segment.stops.join(', ') || 'Без пересадок'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Форматирование времени
const formatTime = (dateString) => {
  const date = new Date(dateString);
  return date.toTimeString().slice(0, 5); // Пример: "10:45"
};

// Вычисление времени прибытия
const calculateArrival = (segment) => {
  const departure = new Date(segment.date);
  return new Date(departure.getTime() + segment.duration * 60 * 1000); // Прибавляем длительность
};

// Форматирование длительности
const formatDuration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}ч ${mins}м`;
};

// Получение строки для пересадок
const getStopsLabel = (stopsCount) => {
  if (stopsCount === 0) return 'Без пересадок';
  if (stopsCount === 1) return '1 пересадка';
  return `${stopsCount} пересадки`;
};

export default Ticket;
