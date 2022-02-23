import React from 'react';
import LogoutButton from '../components/Login/LogoutButton';
import TrackingCard from '../components/MotivesRelated/TrackingCard';
import AccountDetails from '../components/UserAccount/AccountDetails';
import TrackList from '../components/UserAccount/TrackList';
import './Pages.css';

function MyAccount() {
  return (
    <>
    <div className='myAccount'>
      <h1 className='pageTitle'>My Account</h1>
      <h1 className='smallHeading'>Add Title/ Links,</h1>
      <h1 className='bigHeading'>As a Reminder</h1>
      <h1 className='bigHeading2'>Your Events</h1>
      <img className='logo' src={require('../image/Logo.png')}></img>
      
      <TrackList/>
      <LogoutButton/>
      <TrackingCard/>
    </div>
    </>
  );
}

export default MyAccount
