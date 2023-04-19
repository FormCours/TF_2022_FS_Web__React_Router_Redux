import { createAction, createAsyncThunk } from '@reduxjs/toolkit';


export const progressActionIncr = createAction('progress/incr');

export const progressActionBegin = createAsyncThunk(
  'progress/begin',
  async (limit, { getState, dispatch }) => {
    // L'increment du count est généré par le reducer du store

    // Gestion de la condition de fin depuis les valeurs du store
    while (getState().progress.current < getState().progress.end) {

      // Envoi une action custom pour indiquer un increment !
      dispatch(progressActionIncr());

      // Tips: Faire attendre le js pendant ~1 sec
      await new Promise((resolve) => {
        // Envoi du "resolve" du la promesse après 1 seconde
        setTimeout(resolve, 1000);
      });
    }
  }, {
  condition: (limit) => {
    // Test d'acceptation (Si valeur "true" => Le process continue !)
    return limit && typeof (limit) === 'number' && !isNaN(limit) && limit > 0;
  },
  dispatchConditionRejection: true
}
);