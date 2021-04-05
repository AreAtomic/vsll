import './RS.css';

//React
import React from 'react';

// img
import insta from '../../img/insta.png';
import fb from '../../img/fb.svg';

const RS = () => {
  return (
    <div className='columns'>
      <a className='column' href=''>
        <img src={insta} alt='Logo instagram, made by Aurélien Sèbe' />
      </a>
      <a className='column' href=''>
        <img src={fb} alt='Logo facebook, made by Aurélien Sèbe' />
      </a>
    </div>
  );
};

export default RS;
