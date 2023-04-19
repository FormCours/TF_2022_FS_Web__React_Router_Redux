import { createAction, createAsyncThunk } from '@reduxjs/toolkit';


export const progressActionIncr = createAction('progress/incr');

export const progressActionBegin = createAsyncThunk(
  'progress/begin',
  async (limit, thunkAPI) => {
    let count = 0;
    
    while (count < limit) {
      // Envoi une action custom pour indiquer un increment !
      thunkAPI.dispatch(progressActionIncr());

      // Tips: Faire attendre le js pendant ~1 sec
      await new Promise((resolve) => {
        // Envoi du "resolve" du la promesse après 1 seconde
        setTimeout(resolve, 1000);
      });

      count++;
    }
  },{
    condition: (limit) => {
      // Test d'acceptation (Si valeur "true" => Le process continue !)
      return limit && typeof(limit) === 'number' && !isNaN(limit) && limit > 0;
    },
    dispatchConditionRejection: true
  }
);