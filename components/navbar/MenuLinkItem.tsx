import Link from 'next/link';
import { useRouter } from 'next/router';

import style from './MenuLinkItem.module.scss';

interface Props {
  name: string;
  url: string;
  icon?: React.ReactElement;
  variant?: 'primary' | 'highlighted';
}

const MenuLinkItem: React.FC<Props> = ({ name, url, icon, variant = 'primary' }) => {
  const { pathname } = useRouter();

  return (
    <Link href={url}>
      <a
        className={`${style.link} ${pathname === url && variant !== 'highlighted' ? style.selected : ''} ${
          variant === 'highlighted' ? style.highlighted : ''
        }`}>
        {icon}
        <p>{name}</p>
      </a>
    </Link>
  );
};

export default MenuLinkItem;
