import Navbar from '@components/navbar';
import Header from './Header';
import style from './Layout.module.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={style.layout}>
      <Header />
      <main>{children}</main>
      <Navbar />
    </div>
  );
};

export default Layout;
