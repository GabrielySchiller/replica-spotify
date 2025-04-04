import React from 'react';
import logoSpotify from '../assets/img/spotify-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='cabecalho'>
     
      <Link to="/">
        <img src= {logoSpotify} alt="logo do spotify" />
      </Link>
      
      <Link className='ancora-spotify-header' href="#"> <h1>Spotify</h1> </Link>
    </div>
      
  );
};

export default Header;