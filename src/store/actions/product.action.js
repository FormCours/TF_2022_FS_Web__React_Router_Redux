import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// Définition des Action creators
// ******************************

// - Création d'un produit
export const productActionCreate = createAction('product/create', (product) => {

  // Renvoi un object avec le payload
  return {
    payload: {
      ...product,
      id: nanoid()
    }
  };
});
// Exemple d'action généré => { type: 'product/create', payload : {...} }

// - Suppression d'un produit
export const productActionDelete = createAction('product/delete');
// Exemple d'action généré => { type: 'product/delete', payload : 42 }