import MainNavbar from '@components/navbar/MainNavbar';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <a className={style.name}>Tomas Bangerter</a>
      <MainNavbar />
    </header>
  );
};

export default Header;
