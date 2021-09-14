import style from './MenuLinkItem.module.scss';

interface Props {
  name: string;
  url: string;
  icon?: React.ReactElement;
  variant?: 'primary' | 'highlighted';
}

const MenuLinkItem: React.FC<Props> = ({ name, url, icon, variant = 'primary' }) => {
  return (
    <a className={`${style.link} ${variant === 'highlighted' ? style.highlighted : ''}`} href={url}>
      {icon}
      <p>{name}</p>
    </a>
  );
};

export default MenuLinkItem;
