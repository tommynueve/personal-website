import BottomNavbar from '@components/navbar/BottomNavbar';
import Footer from './Footer';
import Header from './Header';
import style from './Layout.module.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={style.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
      <BottomNavbar />
    </div>
  );
};

export default Layout;
