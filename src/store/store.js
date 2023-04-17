import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/product.reducer';

// Doc : https://github.com/LogRocket/redux-logger#usage
import loggerMiddleware from 'redux-logger';


// Création d'un store Redux
const store = configureStore({
  
  // L'ensemble des reducers du store
  reducer: {
    prod: productReducer
  },

  // Activation des outils de dev (actif uniquement en DEV)
  devTools: import.meta.env.DEV,

  // Ajout du middleware "Redux-Logger"
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware)
  /*
  // Ecriture alternative pour ajouter des middlewares
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), loggerMiddleware]
  */
});

export default store;