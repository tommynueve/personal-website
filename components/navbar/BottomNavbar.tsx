import HomeIcon from '@components/icons/HomeIcon';
import style from './Navbar.module.scss';
import MenuLinkItem from './MenuLinkItem';
import ProjectsIcon from '@components/icons/ProjectsIcon';
import EmailIcon from '@components/icons/EmailIcon';

const BottomNavbar: React.FC = () => {
  return (
    <nav className={style['bottom-nav']}>
      <ul>
        <li>
          <MenuLinkItem name='Home' url='/' icon={<HomeIcon />} />
        </li>
        <li>
          <MenuLinkItem name='Projects' url='/projects' icon={<ProjectsIcon />} />
        </li>
        <li>
          <MenuLinkItem name='Contact' url='/contact' icon={<EmailIcon />} />
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavbar;
