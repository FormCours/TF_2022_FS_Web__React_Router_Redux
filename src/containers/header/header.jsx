import licorneLogo from './../../assets/licorne-64x64.png';
import style from './header.module.css';
import { NavLink } from 'react-router-dom';

const CustomNavLink = ({ to, text }) => (
  <NavLink to={to} className={({ isActive }) => isActive ? style['active-link'] : ''}>
    {text}
  </NavLink>
);

const Header = () => (
  <header className={style.header}>
    <img src={licorneLogo} alt={'Logo de l\'app'} />
    <nav>
      <ul className={style['nav-links']}>
        <li>
          <CustomNavLink to='' text='Accueil' />
        </li>
        <li>
          <CustomNavLink to='product' text='Produit' />
        </li>
        <li>
          <CustomNavLink to='about' text='A Propos' />
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;