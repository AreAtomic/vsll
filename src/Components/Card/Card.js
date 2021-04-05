//Styles
import './Card.css';

// React
import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.src} alt='Icone vélo, Vélo Sport Léo Lagrange Castres' className="mt-6"/>
      <h3>{props.titre}</h3>
    </div>
  );
};

export default Card;
