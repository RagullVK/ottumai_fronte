import React from 'react';
import { useState } from 'react/cjs/react.development';
import Track from './Track';
import TrackingForm from './TrackingForm';
import './Tracking.css'

function TrackList() {

    const [tracking,setTracking] = useState([]);
    const addTrack = track => {
        //Don't allow text to be added if nothing is entered
        if (!track.text || /^\s*$/.test(track.text)) {
            return  
        }
        const newTracking = [track, ...tracking];

        setTracking(newTracking);
    };

    const updateTracking = (trackId, newValue) => {
        setTracking(prev => prev.map(item => (item.id === trackId ? newValue : item)));
    }

    const removeTracking = id => {
        const removeArr = [...tracking].filter(track => track.id !== id);
        setTracking(removeArr);
    }

    const completeTracking = id =>{
        let updatedTracking = tracking.map(track => {
            if (track.id === id){
                track.isComplete = !track.isComplete
            }
            return track;
        })
        setTracking(updatedTracking)
    }

  return (
  <div className='tracking-con'> 
      <TrackingForm onSubmit = {addTrack} />
      <Track 
        tracking={tracking} 
        completeTracking={completeTracking} 
        removeTracking={removeTracking} 
        updateTracking={updateTracking}
      />
  </div>);
}

export default TrackList;
