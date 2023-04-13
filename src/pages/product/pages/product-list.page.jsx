import { Link } from 'react-router-dom';

const ProductListPage = () => {

  return (
    <>
      <h1>Liste des produits : </h1>
      TODO !!!

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