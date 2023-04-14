import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/product.reducer';

// Création d'un store Redux
const store = configureStore({
  
  // L'ensemble des reducers du store
  reducer: {
    productReducer
  },

  // Activation des outils de dev (actif uniquement en DEV)
  devTools: import.meta.env.DEV
});

export default store;