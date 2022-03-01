import React, {useState }from 'react';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import TrackingForm from './TrackingForm';
import Axios from 'axios';

function Track({completeTracking, removeTracking, updateTracking}) {
  
  const [edit, setEdit] = useState({ id:null, value: ''});
  const [tracking, setTracking] = useState([]);

  const getTracking = () => {
    Axios.get('http://localhost:3001/tracking').then((response) => {
       setTracking(response.data);
    });
  }
  
  const submitUpdate = value => {
      updateTracking(edit.id, value)
      setEdit({id:null, value:''})
  };

  if (edit.id){
      return <TrackingForm edit={edit} onSubmit={submitUpdate} />
  }

  return(
  <>  
  <div>
       {getTracking()}
       {
           tracking.map((card, index) => {
               return (
                   <div className='tracking-display' key={index}>
                     <div key = {card.id} onClick ={() => completeTracking(card.id)}>  
                       {card.title2}
                      </div>

                      <div className='icons'>
                        <TiEdit
                        onClick={() => setEdit({id: card.id, value: card.title2})}
                        className='edit-icon'
                        /> 
                        <RiCloseCircleLine 
                        onClick={() => removeTracking(card.id)}
                        />
                      </div>
                      
                   </div>
                   
               )
           })
       }
   </div>
  </>);
}


export default Track;