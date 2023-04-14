import PriceDisplay from '../../components/price-display/price-display';
import { useSelector } from 'react-redux';

const ProductDetail = ({ productId }) => {

  // Récuperer le detail du produit (via "useSelector" de React-Redux)
  const product = useSelector(state => state.prod.products.find(p => p.id === productId));

  if (!product) {
    return (
      <p>Produit inconnu 🤦‍♂️</p>
    );
  }

  return (
    <>
      <p>{product.name} [{product.code}]</p>
      {!product.inStock && (
        <p>Le produit actuellement indisponible 😭</p>
      )}
      <p>Prix : <PriceDisplay price={product.price} discount={product.discount} /></p>
      <p>{product.description}</p>
    </>
  );
};

export default ProductDetail;