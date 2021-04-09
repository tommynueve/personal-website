import Link from 'next/link';

import HomeIcon from '@components/icons/HomeIcon';
import style from './Navbar.module.scss';
import MenuLinkItem from './MenuLinkItem';

const Navbar: React.FC = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <MenuLinkItem name='Home' url='/' icon={<HomeIcon />} />
        </li>
        <li>
          <MenuLinkItem name='Resume' url='/resume' icon={<HomeIcon />} />
        </li>
        <li>
          <MenuLinkItem name='Projects' url='/projects' icon={<HomeIcon />} />
        </li>
        <li>
          <MenuLinkItem name='Contact' url='/contact' icon={<HomeIcon />} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
