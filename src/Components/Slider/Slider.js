// Styles
import './Slider.css';

// React
import React, { useState } from 'react';

// images
import fleche from '../../img/Ellipse 1.svg';
import fleche2 from '../../img/Ellipse 2.svg';
import slider1 from '../../img/slider1.jpg';
import slider2 from '../../img/slider2.jpg';
import slider3 from '../../img/slider3.jpg';
import slider4 from '../../img/slider4.jpg';
import bullet1 from '../../img/Ellipse 3.svg';
import bullet2 from '../../img/Ellipse 4.svg';

const Slider = () => {
  const slides = [slider1, slider2, slider3, slider4];
  const [slide, setSlide] = useState(0);

  const next = () => {
    if (slide != slides.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(0);
    }
  };

  const previous = () => {
    if (slide != 0) {
      setSlide(slide - 1);
    } else {
      setSlide(slides.length - 1);
    }
  };

  const setIndex = (e) => {
    setSlide(e);
  };
  return (
    <div className='columns is-vcentered'>
      <div className='column is-1 ml-auto'>
        <img
          src={fleche}
          alt='Flèche, Vélo sport léolagrange, Castres Cyclisme'
          onClick={previous}
        />
      </div>
      <div className='column is-6'>
        <div className='has-text-centered slide'>
          <img
            src={slides[slide]}
            alt='Photo du vélo sport léolagrange en action, Castres cyclisme école de vélo'
          />
          <div className='index columns has-text-centered mt-3'>
            {slides.map((item, i) => {
              if (i == slide) {
                return <img className='mx-auto' src={bullet1} onClick={() => setIndex(i)}/>;
              } else {
                return <img className='mx-auto' src={bullet2} onClick={() => setIndex(i)}/>;
              }
            })}
          </div>
        </div>
      </div>
      <div className='column is-1 mr-auto'>
        <img
          src={fleche2}
          alt='Flèche, Vélo sport léolagrange, Castres Cyclisme'
          onClick={next}
        />
      </div>
    </div>
  );
};

export default Slider;
