import SocialLinks from '@components/sociallinks';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <small>&copy; Tomas Bangerter</small>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
