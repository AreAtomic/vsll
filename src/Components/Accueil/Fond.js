import React from 'react';

// styles
import './Accueil.css'

// images
import FondSvg from '../../img/maontagne.svg';

const Fond = () => {
  return (
    <div className="fond">
      <img src={FondSvg} alt='Montagne svh, VSLL Castres' />
    </div>
  );
};

export default Fond;
