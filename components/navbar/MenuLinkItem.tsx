import Link from 'next/link';
import { useRouter } from 'next/router';

import style from './MenuLinkItem.module.scss';

interface Props {
  name: string;
  url: string;
  icon: React.ReactElement;
}

const MenuLinkItem: React.FC<Props> = ({ name, url, icon }) => {
  const { pathname } = useRouter();

  return (
    <Link href={url}>
      <a className={`${style.link} ${pathname === url ? style.selected : ''}`}>
        {icon}
        <p>{name}</p>
      </a>
    </Link>
  );
};

export default MenuLinkItem;
