import React from 'react';
import './App.css';
import Who from './Who/WhoSection';
import Cyclists from './Cyclists/CyclistsSection';
import News from './News/NewsSection';
import Contact from './Contact/ContactSection';
import Social from './Social/SocialSection';
import Sponsors from './Sponsors/SponsorsSection';

const App = () => {
  return (
    <div className="App">
      Site du VSLL
      <Who />
      <Cyclists />
      <News />
      <Contact />
      <Social />
      <Sponsors />
    </div>
  );
}

export default App;
