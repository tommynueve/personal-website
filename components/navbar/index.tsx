import HomeIcon from '@components/icons/HomeIcon';
import style from './Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <a>
            <HomeIcon />
            <p>Home</p>
          </a>
        </li>
        <li>Menu 2</li>
        <li>Menu 3</li>
        <li>Menu 4</li>
      </ul>
    </nav>
  );
};

export default Navbar;
