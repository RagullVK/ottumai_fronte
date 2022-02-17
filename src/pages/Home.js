import React from 'react';
import Card from '../components/MotivesRelated/Card';
import Button from '../components/MotivesRelated/Button';
import details from '../components/MotivesRelated/HardCode'
import './Pages.css';
import { useState } from 'react/cjs/react.development';
import Axios from 'axios';



function Home() {

  //Getting the stored event details
  const [eventList, setEventList] = useState([]);

  const getEvents = () => {
      Axios.get('http://localhost:3001/events').then((response) => {
         setEventList(response.data);
      });
  }

  //Show the communities stored as the categories 
  const allCategories = ['All', ...new Set(details.map(detail =>detail.community))];

  const[motiveCard, setMotiveCard] = useState(details);
  const[buttons, setButtons] = useState(allCategories);

  //Creating filter 
  const filter = (button) => {
    if (button === 'All'){
      setMotiveCard(details);
      return;
    }

  const filteredData = details.filter(detail => detail.community === button);
  setMotiveCard(filteredData)
}

  return <div className='home'>
      <h1 className='pageTitle' >Home</h1>
      <h1 className='bigHeading'>Select A Motive</h1>
      <img className='logo' src={require('../image/Logo.png')}></img>

      <Button button={buttons} filter={filter}/>
      <Card motiveCard={motiveCard}/>
  </div>;
}

export default Home;

