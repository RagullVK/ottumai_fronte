import React from 'react';
import TrackList from '../components/UserAccount/TrackList';
import './Pages.css';

function MyAccount() {
  return <div className='myAccount'>
      <h1 className='pageTitle'>My Account</h1>
      <h1 className='smallHeading'>Add Title/ Links,</h1>
      <h1 className='bigHeading'>As a Reminder</h1>
      <img className='logo' src={require('../image/LogoR.png')}></img>
      
      <TrackList/>
  </div>;
}

export default MyAccount
