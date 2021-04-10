import style from './Buttons.module.scss';

interface Props {
  text: string;
  variant?: 'primary' | 'secondary';
}

const MainButton: React.FC<Props> = ({ text = '', variant = 'primary' }) => {
  const className = `${style['main-button']} ${variant === 'secondary' ? style.secondary : ''}`;

  return <button className={className}>{text}</button>;
};

export default MainButton;
