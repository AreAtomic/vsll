// Styles
import './Contact.css';

// React
import React, { useState } from 'react';

const Contact = () => {
  const [email, setemail] = useState('');
  const [nom, setnom] = useState('');
  const [objet, setobjet] = useState('');
  const [message, setmessage] = useState('');

  const changeMail = (e) => {
    setemail(e.target.value);
  };

  const changeNom = (e) => {
    setnom(e.target.value);
  };

  const changeObjet = (e) => {
    setobjet(e.target.value);
  };

  const changeMessage = (e) => {
    setmessage(e.target.value);
  };

  return (
    <form className='form' onSubmit=''>
      <div className='field'>
        <label className='label'>Email</label>
        <input
          className='input'
          value={email}
          onChange={changeMail}
          type='mail'
          required={true}
        />
      </div>
      <div className='field'>
        <label className='label'>Nom</label>
        <input
          className='input'
          value={nom}
          onChange={changeNom}
          type='text'
          required={true}
        />
      </div>
      <div className='field'>
        <label className='label'>Objet</label>
        <input
          className='input'
          value={objet}
          onChange={changeObjet}
          type='text'
          required={true}
        />
      </div>
      <div className='field'>
        <label className='label'>Message</label>
        <textarea
          className='textarea'
          value={message}
          onChange={changeMessage}
          type='text'
          required={true}
        />
      </div>
      <input type='submit' value='Envoyer' className="button is-primary"/>
    </form>
  );
};

export default Contact;
