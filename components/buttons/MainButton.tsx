import style from './Buttons.module.scss';

interface Props {
  text: string;
  variant?: 'primary' | 'secondary';
}

const MainButton: React.FC<Props & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  text = '',
  variant = 'primary',
  ...rest
}) => {
  const className = `${style['main-button']} ${variant === 'secondary' ? style.secondary : ''}`;

  return (
    <button className={className} {...rest}>
      {text}
    </button>
  );
};

export default MainButton;
