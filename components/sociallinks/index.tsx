import GithubIcon from '@components/icons/GithubIcon';
import LinkedinIcon from '@components/icons/LinkedinIcon';
import style from './SocialLinks.module.scss';

const SocialLinks = () => {
  return (
    <ul className={style.container}>
      <li>
        <a href='https://www.linkedin.com/in/tomas-bangerter-472a2437/?locale=en_US' target='_blank' rel='noreferrer'>
          <LinkedinIcon />
        </a>
      </li>
      <li>
        <a href='https://github.com/tommynueve' target='_blank' rel='noreferrer'>
          <GithubIcon />
        </a>
      </li>
    </ul>
  );
};
export default SocialLinks;
