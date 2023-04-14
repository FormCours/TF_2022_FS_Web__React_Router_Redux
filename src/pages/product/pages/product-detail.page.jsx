import { useParams } from 'react-router-dom';
import ProductDetail from '../../../containers/product/product-detail';
import { Link } from 'react-router-dom';
import style from './../styles/product-page.module.css';

const ProductDetailPage = () => {

  const { productId } = useParams();

  return (
    <>
      <div className={style['title-with-link']}>
        <h2>Détail du produit</h2>
        <Link to='/product'><button>Retour la liste</button></Link>
      </div>

      <ProductDetail productId={productId} />
    </>
  );
};

export default ProductDetailPage;