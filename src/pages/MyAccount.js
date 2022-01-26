import React from 'react';
import './Pages.css';

function MyAccount() {
  return <div className='myAccount'>
      <h1 className='pageTitle'>My Account</h1>
      <h1 className='smallHeading'>View</h1>
      <h1 className='bigHeading'>Profile Details</h1>
      <img className='logo' src={require('../image/LogoR.png')}></img>
  </div>;
}

export default MyAccount
