import { FormEventHandler, useState } from 'react';

import MainButton from '@components/buttons/MainButton';
import EmailIcon from '@components/icons/EmailIcon';
import SocialLinks from '@components/sociallinks';
import style from './Contact.module.scss';
import configLinks from '@config/Links';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const validateForm = (): boolean => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setIsError(true);
      setStatusMessage('Please complete all the fields so I know who you are and how I can help!');
      return false;
    }
    return true;
  };

  const onFormSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setStatusMessage('');
    setIsError(false);
    if (!validateForm()) return;

    try {
      setStatusMessage('Sending your message to my inbox...');
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      console.log(response);
      if (!response.ok) throw Error(response.statusText);
      setIsError(false);
      setStatusMessage('Message sent succesfully, I will get back to you as soon as possible!');
    } catch (e) {
      console.error(e);
      setIsError(true);
      setStatusMessage(
        'Oops! There was an error sending the form. While I take a look at it, you can shoot me an email directly to totti_b@hotmail.com or contact me through social media by checking the links above the form.'
      );
    }
  };

  return (
    <section className={style['contact-container']} id='contact'>
      <h1>Got a proposition?</h1>
      <h3>I'm always on the look for new challenges!</h3>
      <address>
        <EmailIcon />
        <a href={`mailto:${configLinks.email}`}>{configLinks.email}</a>
      </address>
      <SocialLinks showEmailIcon={false} />
      <form onSubmit={onFormSubmit}>
        <label htmlFor='name-input'>Name</label>
        <input type='text' placeholder='Your name' onChange={(e) => setName(e.target.value)} value={name}></input>
        <label>Email</label>
        <input type='email' placeholder='Your email' onChange={(e) => setEmail(e.target.value)} value={email}></input>
        <label>Message</label>
        <textarea
          placeholder='A nice message'
          rows={8}
          onChange={(e) => setMessage(e.target.value)}
          value={message}></textarea>
        <MainButton text='Get in touch' type='submit' />
      </form>
      {statusMessage && <p className={isError ? style.error : style.success}>{statusMessage}</p>}
    </section>
  );
};

export default ContactSection;
