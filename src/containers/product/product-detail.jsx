import PriceDisplay from '../../components/price-display/price-display';
import mockup from './data-mockup.json';


const ProductDetail = ({productId}) => {

  // Récuperer le detail du produit
  // TODO Récuperer depuis le store le produit via l'productId
  const product = mockup[2];

  return (
    <>
      <p>{product.name} [{product.code}]</p>
      {!product.inStock && (
        <p>Le produit actuellement indisponible 😭</p>
      )}
      <p>Prix : <PriceDisplay price={product.price} discount={product.discount}/></p>
      <p>{product.description}</p>
    </>
  )
}

export default ProductDetail;