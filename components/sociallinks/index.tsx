import GithubIcon from '@components/icons/GithubIcon';
import LinkedinIcon from '@components/icons/LinkedinIcon';
import style from './SocialLinks.module.scss';

const SocialLinks = () => {
  return (
    <ul className={style.container}>
      <li>
        <a>
          <LinkedinIcon />
        </a>
      </li>
      <li>
        <a>
          <GithubIcon />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
