import MainNavbar from '@components/navbar/MainNavbar';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.container}>
      <small>&copy; Tomas Bangerter</small>
      <MainNavbar />
    </footer>
  );
};

export default Footer;
