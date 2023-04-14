import { Link } from 'react-router-dom';
import ProductTable from '../../../containers/product/product-table';

const ProductListPage = () => {

  return (
    <>
      <Link to='/product/create'><button>Ajouter un produit !</button></Link>
      <ProductTable />

      <hr />
      <div>
        {/* Chemin relatif */}
        <Link to='13'>Product 13</Link>
      </div>
      <div>
        {/* Chemin absolue */}
        <Link to='/product/42'>Product 42</Link>
      </div>

    </>
  );
};

export default ProductListPage;