import React from 'react';
import PublishDetails from '../components/CreatePublish/PublishDetails';
import './Pages.css';


function Publish() {
  return <div className='publish'>
      <h1 className='pageTitle'>Publish</h1>
      <h1 className='smallHeading'>Fill the</h1>
      <h1 className='bigHeading'>Required Information</h1>
      <img className='logo' src={require('../image/Logo.png')}></img>

      <PublishDetails/>
  </div>;
}

export default Publish;
