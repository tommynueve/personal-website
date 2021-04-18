import style from './Navbar.module.scss';
import MenuLinkItem from './MenuLinkItem';

const MainNavbar = () => {
  return (
    <nav className={style['top-nav']}>
      <ul>
        <li>
          <MenuLinkItem name='Home' url='/' />
        </li>
        <li>
          <MenuLinkItem name='Projects' url='/projects' />
        </li>
        <li>
          <MenuLinkItem name='Contact' url='/contact' variant='highlighted' />
        </li>
      </ul>
    </nav>
  );
};

export default MainNavbar;
