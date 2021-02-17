import React from 'react';
import './App.css';
import Who from '.pages/Who/WhoSection';
import Cyclists from '.pages/Cyclists/CyclistsSection';
import News from '.pages/News/NewsSection';
import Contact from '.pages/Contact/ContactSection';
import Social from '.pages/Social/SocialSection';
import Sponsors from '.pages/Sponsors/SponsorsSection';

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
