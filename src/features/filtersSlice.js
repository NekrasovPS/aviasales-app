import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  all: true,
  noTransfers: true,
  oneTransfer: true,
  twoTransfers: true,
  threeTransfers: true,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      const filter = action.payload;
      state[filter] = !state[filter];

      if (filter === 'all') {
        if (state.all) {
          state.noTransfers = true;
          state.oneTransfer = true;
          state.twoTransfers = true;
          state.threeTransfers = true;
        } else {
          state.noTransfers = false;
          state.oneTransfer = false;
          state.twoTransfers = false;
          state.threeTransfers = false;
        }
      }

      if (filter !== 'all' && state[filter] === false) {
        state.all = false;
      }

      if (
        state.noTransfers &&
        state.oneTransfer &&
        state.twoTransfers &&
        state.threeTransfers
      ) {
        state.all = true;
      }
    },
  },
});

export const { toggleFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
