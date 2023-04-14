import { createReducer } from '@reduxjs/toolkit';
import { productActionCreate, productActionDelete } from '../actions/product.action';

// Définition de l'état initial du store (categorie "prod")
// *************************************
const initialState = {
  products: [
    {
      "id": "TEST_TEST",
      "name": "Product 1",
      "description": "Ceci est un produit simple en stock",
      "code": "Zaza001",
      "price": 42,
      "discount": null,
      "inStock": true
    }
  ],
  count: 1
};

// Définition du reducer qui permet de résoudre les actions
// ********************************************************
const productReducer = createReducer(initialState, (builder) => {
  // Version AVEC Immer (Modern :o)
  builder
    .addCase(productActionCreate, (state, action) => {

      state.products.push(action.payload);
      state.count++;
    })
    .addCase(productActionDelete, (state, action) => {
      const targetId = action.payload;
      
      state.products = state.products.filter(product => product.id !== targetId);
      state.count = state.products.length;
    });
});

export default productReducer;