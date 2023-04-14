import { useCallback } from 'react';
import PriceDisplay from '../../components/price-display/price-display';
import { useNavigate } from 'react-router-dom';
import style from './product.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { productActionDelete } from '../../store/actions/product.action';


const ProductTableHead = () => (
  <thead>
    <tr>
      <th>Nom</th>
      <th>Code</th>
      <th>Prix</th>
      <th>En stock</th>
      <th></th>
    </tr>
  </thead>
);

const ProductTableRow = ({ id, name, code, price, discount, inStock, onDetail, onRemove }) => (
  <tr>
    <td onClick={() => onDetail(id)}>{name}</td>
    <td onClick={() => onDetail(id)}>{code}</td>
    <td onClick={() => onDetail(id)}>
      <PriceDisplay price={price} discount={discount} />
    </td>
    <td>{inStock ? 'V' : 'X'}</td>
    <td>
      <button onClick={() => onRemove(id)}>Supprimer</button>
    </td>
  </tr>
);

const ProductTable = () => {

  // Permet de faire de la navigation dans react-router (sans Link / NavLink)
  const navigate = useNavigate();

  // Récuperation du dispatch, pour pouvoir envoyer des actions vers le store
  const dispatch = useDispatch();

  // Récuperation des données (via "useSelector" de React-Redux)
  const products = useSelector(state => state.prod.products);

  const handleDetail = useCallback((id) => {
    navigate('/product/' + id);
  });

  const handleRemove = useCallback((id) => {
    // Création de l'action via le "action creator"
    const actionDelete = productActionDelete(id);
    console.log('Action Delete', actionDelete);

    // Envoi de l'action au store Redux
    dispatch(actionDelete);
  });

  return (
    <table className={style['product-table']}>
      <ProductTableHead />
      <tbody>
        {products.map(product => (
          <ProductTableRow {...product} key={product.id}
            onDetail={handleDetail}
            onRemove={handleRemove} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;