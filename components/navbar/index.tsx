import HomeIcon from '@components/icons/HomeIcon';
import style from './Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <a className={style.selected}>
            <HomeIcon />
            <p>Home</p>
          </a>
        </li>
        <li>
          <a>
            <HomeIcon />
            <p>Resume</p>
          </a>
        </li>
        <li>
          <a>
            <HomeIcon />
            <p>Projects</p>
          </a>
        </li>
        <li>
          <a>
            <HomeIcon />
            <p>Contact</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
