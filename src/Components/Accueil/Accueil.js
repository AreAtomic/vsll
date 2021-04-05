import React from 'react';

// Composants
import Fond from './Fond';
import Logo from '../Logo/Logo';
import Card from '../Card/Card';
import Slider from '../Slider/Slider';
import Contact from '../Contact/Contact';
import RS from '../RS/RS';

// images
import fleche from '../../img/circle-down_major_monotone(1) 1.svg';
import map from '../../img/map-pin 1.svg';
import calendar from '../../img/calendar 1.svg';
import profil from '../../img/profile_minor 1.svg';
import start from '../../img/start 1.svg';

const Accueil = () => {
  return (
    <div>
      <Fond />
      <div className='container'>
        <div className='column grid mb-6'>
          <div className='mt-4 auto has-text-centered'>
            <Logo accueil={true} />
            <a className='arrow is-hidden-touch' href='#qui'>
              <img src={fleche} alt='Flèche, Aurélien Sèbe' className='mt-3' />
            </a>
          </div>
        </div>
        <div className='columns mt-6 mb-6'></div>
        <div className='columns mt-6 mb-6'></div>
        <div className='has-text-centered columns mt-6'>
          <h1>Qui sommes nous ?</h1>
        </div>
        <div className='columns mt-6'>
          <div className='column'>
            <Card titre='12 rue du Petit Train 81100 Castres' src={map} />
          </div>
          <div className='column'>
            <Card titre='2 Entraînements par semaine' src={calendar} />
          </div>
          <div className='column'>
            <Card titre='50 Licenciés' src={profil} />
          </div>
          <a className='column' href='contact'>
            <Card titre='Nous rejoindre' src={start} />
          </a>
        </div>
        <div className='has-text-centered columns mt-6'>
          <h1>Nos coureurs</h1>
        </div>
        <Slider />
        <div className='columns mt-6'>
          <div className='has-text-centered column is-half'>
            <h1 style={{ width: '45vw' }}>Nous contacter</h1>
            <Contact />
          </div>
          <div className='has-text-centered column is-half'>
            <h1 style={{ width: '45vw' }}>Réseaux sociaux</h1>
            <RS />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
