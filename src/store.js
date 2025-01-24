import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './features/filtersSlice';
import ticketsReducer from './features/ticketsSlice';
import tabsReducer from './features/tabsSlice'; // Импортируем новый слайс

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    tickets: ticketsReducer,
    tabs: tabsReducer, // Добавляем в хранилище
  },
});

export default store;
