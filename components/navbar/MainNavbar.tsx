import style from './Navbar.module.scss';
import MenuLinkItem from './MenuLinkItem';
import SocialLinks from '@components/sociallinks';

const MainNavbar = () => {
  return (
    <nav className={style['top-nav']}>
      <ul>
        <SocialLinks showEmailIcon={false} />
        <li className={style['menu-contact']}>
          <MenuLinkItem name='Contact' url='#contact' variant='highlighted' />
        </li>
      </ul>
    </nav>
  );
};

export default MainNavbar;
