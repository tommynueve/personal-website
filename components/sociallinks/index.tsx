import EmailIcon from '@components/icons/EmailIcon';
import GithubIcon from '@components/icons/GithubIcon';
import LinkedinIcon from '@components/icons/LinkedinIcon';
import style from './SocialLinks.module.scss';
import configLinks from '@config/Links';

interface Props {
  showEmailIcon?: boolean;
}

const SocialLinks: React.FC<Props> = ({ showEmailIcon = true }) => {
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
      {showEmailIcon && (
        <li>
          <address>
            <a href={`mailto:${configLinks.email}`}>
              <EmailIcon />
            </a>
          </address>
        </li>
      )}
    </ul>
  );
};
export default SocialLinks;
