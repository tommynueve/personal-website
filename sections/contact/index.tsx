import MainButton from '@components/buttons/MainButton';
import HomeIcon from '@components/icons/HomeIcon';
import style from './Contact.module.scss';

const ContactSection = () => {
  return (
    <div className={style['contact-container']}>
      <h1>Got a proposition?</h1>
      <h3>I'm always on the look for new challenges!</h3>
      <form>
        <label htmlFor='name-input'>Name</label>
        <input id='name-input' type='text' placeholder='Your name'></input>
        <label>Email</label>
        <input id='email-input' type='email' placeholder='Your email'></input>
        <label>Message</label>
        <textarea id='message-input' placeholder='A nice message' rows={8}></textarea>
        <MainButton text='Get in touch' type='submit' />
      </form>
      <div className={style['linkedin-container']}>
        <p>Or find me on Linkedin: </p>
        <HomeIcon />
      </div>
    </div>
  );
};

export default ContactSection;
