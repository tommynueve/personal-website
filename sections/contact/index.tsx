import MainButton from '@components/buttons/MainButton';
import EmailIcon from '@components/icons/EmailIcon';
import SocialLinks from '@components/sociallinks';
import style from './Contact.module.scss';

const ContactSection = () => {
  return (
    <section className={style['contact-container']}>
      <h1>Got a proposition?</h1>
      <h3>I'm always on the look for new challenges!</h3>
      <address>
        <EmailIcon />
        <a href='mailto:totti_b@hotmail.com'>totti_b@hotmail.com</a>
      </address>
      <SocialLinks />
      <form>
        <label htmlFor='name-input'>Name</label>
        <input id='name-input' type='text' placeholder='Your name'></input>
        <label>Email</label>
        <input id='email-input' type='email' placeholder='Your email'></input>
        <label>Message</label>
        <textarea id='message-input' placeholder='A nice message' rows={8}></textarea>
        <MainButton text='Get in touch' type='submit' />
      </form>
    </section>
  );
};

export default ContactSection;
