import image from '../../img/logo.svg';

const Logo = (props) => {
  return (
    <div className='logo has-text-centered'>
      <img
        src={image}
        alt='Vélo sport léo lagrange, Castres logo'
        style={props.accueil ? { maxWidth: '500px', width: '35vw' } : {width: 'auto'}}
      />
    </div>
  );
};

export default Logo;
