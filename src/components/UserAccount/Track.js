import React, {useState }from 'react';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import TrackingForm from './TrackingForm';

function Track({tracking, completeTracking, removeTracking, updateTracking}) {
  
  const [edit, setEdit] = useState({ id:null, value: ''});
  
  const submitUpdate = value => {
      updateTracking(edit.id, value)
      setEdit({id:null, value:''})
  };

  if (edit.id){
      return <TrackingForm edit={edit} onSubmit={submitUpdate} />
  }
  
    return tracking.map((track, index) =>( 
  <div className='tracking-display' key={index}>
      <div key={track.id} onClick={() => completeTracking(track.id)}>
          {track.text}
      </div>

      <div className='icons'>
           <TiEdit
            onClick={() => setEdit({id: track.id, value: track.text})}
            className='edit-icon'
           /> 
           <RiCloseCircleLine 
            onClick={() => removeTracking(track.id)}
            />
      </div>
  </div>));
}


export default Track;