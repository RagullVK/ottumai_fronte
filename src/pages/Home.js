import React from 'react';
import Card from '../components/MotivesRelated/Card';
import Button from '../components/MotivesRelated/Button';
import details from '../components/MotivesRelated/HardCode'
import './Pages.css';
import { useState } from 'react/cjs/react.development';

const allCategories = ['All', ...new Set(details.map(detail =>detail.community))];


function Home() {

  const[motiveCard, setMotiveCard] = useState(details);
  const[buttons, setButtons] = useState(allCategories);

  const filter = (button) => {
    if (button === 'All'){
      setMotiveCard(details);
      return;
    }

  const filteredData = details.filter(detail => detail.community === button);
  setMotiveCard(filteredData)
}

  return <div className='home'>
      <h1 >Home</h1>

      <Button button={buttons} filter={filter}/>
      <Card motiveCard={motiveCard}/>
  </div>;
}

export default Home;

