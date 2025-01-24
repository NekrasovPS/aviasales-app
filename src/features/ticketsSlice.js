import { createSlice } from '@reduxjs/toolkit';
import { getSearchId, getTickets } from '../Api/Api.jsx'; // Assuming this API file is in the correct location

const initialState = {
  tickets: [],
  loading: false,
  allLoaded: false,
};

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setTickets: (state, action) => {
      state.tickets = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAllLoaded: (state, action) => {
      state.allLoaded = action.payload;
    },
  },
});

export const { setTickets, setLoading, setAllLoaded } = ticketsSlice.actions;

// src/features/ticketsSlice.js
export const loadTicketsAsync = () => async (dispatch, getState) => {
  const { tickets, loading, allLoaded } = getState().tickets;

  if (loading || allLoaded) return;

  dispatch(setLoading(true));

  try {
    const searchId = await getSearchId();
    let newTickets = [];
    let stopFetching = false;
    const startIndex = tickets.length; // Начинаем с текущего количества загруженных билетов

    while (!stopFetching && newTickets.length < 5) {
      const data = await getTickets(searchId);
      const remainingTickets = data.tickets.slice(startIndex, startIndex + 5); // Загружаем только 5
      newTickets = [...newTickets, ...remainingTickets];
      stopFetching = data.stop; // Проверяем, есть ли больше билетов
    }

    // Добавляем только новые билеты
    dispatch(setTickets([...tickets, ...newTickets]));
    dispatch(setAllLoaded(stopFetching));
  } catch (error) {
    console.error('Error fetching tickets:', error);
  } finally {
    dispatch(setLoading(false));
  }
};

export default ticketsSlice.reducer;
