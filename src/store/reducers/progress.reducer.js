import { createReducer } from '@reduxjs/toolkit';
import { progressActionBegin, progressActionIncr } from '../actions/progress-v2.action';

const initialState = {
  active: false,
  start: 0,
  current: null,
  end: null,
  message: 'Initial'
};

const progressReducer = createReducer(initialState, builder => {
  builder
    .addCase(progressActionBegin.pending, (state, action) => {
      state.active = true;
      state.current = state.start;
      state.end = action.meta.arg;
      state.message = 'Demarrage';
    })
    .addCase(progressActionIncr, (state) => {
      state.current++;
      state.message = 'En cours';
    })
    .addCase(progressActionBegin.fulfilled, (state) => {
      state.active = false;
      state.message = 'Terminé';
    })
    .addCase(progressActionBegin.rejected, (state, action) => {
      state.active = false;
      state.message = 'Erreur : ' + action.error.name;
    })
});

export default progressReducer;