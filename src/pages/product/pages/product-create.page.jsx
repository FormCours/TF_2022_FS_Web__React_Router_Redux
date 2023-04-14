import { Link } from 'react-router-dom';
import style from './../styles/product-page.module.css';
import ProductForm from '../../../containers/product/product-form';

const ProductCreatePage = () => {

  return (
    <>
      <div className={style['title-with-link']}>
        <h2>Ajouter un nouveau produit</h2>
        <Link to='/product'><button>Retour la liste</button></Link>
      </div>
      <ProductForm />
    </>
  );
};

export default ProductCreatePage;