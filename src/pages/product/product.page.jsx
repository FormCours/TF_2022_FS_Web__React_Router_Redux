import { Outlet } from 'react-router-dom';

const ProductPage = () => {

  return (
    <>
      <h1>Page pour gérer les produits</h1>
      <Outlet />
    </>
  )
}

export default ProductPage;