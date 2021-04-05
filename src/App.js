// styles
import './global.sass';

// composants
import Navbar from './Components/Navbar/Navbar';
import Logo from './Components/Logo/Logo';
import Accueil from './Components/Accueil/Accueil';
const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar />
        <Accueil />
      </header>
    </div>
  );
};

export default App;
