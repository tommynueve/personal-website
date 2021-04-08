import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <a className={style.name}>Tomas Bangerter</a>
    </header>
  );
};

export default Header;
