import { createReducer } from '@reduxjs/toolkit';
import { productActionCreate, productActionDelete } from '../actions/product.action';

// Définition de l'état initial du store (categorie "product")
// *************************************
const initialState = {
  products: [],
  count: 0
};

// Définition du reducer qui permet de résoudre les actions
// ********************************************************
const productReducer = createReducer(initialState, (builder) => {
  // Version SANS Immer (A l'ancienne !)
  builder
    .addCase(productActionCreate, (state, action) => {
      return {
        ...state,
        count: state.count + 1,
        products: [...state.products, action.payload]
      };
    })
    .addCase(productActionDelete, (state, action) => {
      const targetId = action.payload;
      return {
        ...state,
        count: state.count - 1,
        products: state.products.filter(product => product.id !== targetId)
      }
    });
});

export default productReducer;