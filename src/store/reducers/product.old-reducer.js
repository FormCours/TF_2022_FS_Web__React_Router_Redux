import { createReducer } from '@reduxjs/toolkit';
import { productActionCreate, productActionDelete } from '../actions/product.action';

// Définition de l'état initial du store (categorie "product")
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
      const products = state.products.filter(product => product.id !== targetId);
      return {
        ...state,
        count: products.length,
        products
      }
    });
});

export default productReducer;