import MainNavbar from '@components/navbar/MainNavbar';
import Link from 'next/link';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <Link href='/'>
        <a className={style.name}>Tomas Bangerter</a>
      </Link>
      <MainNavbar />
    </header>
  );
};

export default Header;
