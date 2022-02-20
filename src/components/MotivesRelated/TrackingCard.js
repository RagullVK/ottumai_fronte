import '../UserAccount/Tracking.css';
import Axios from "axios";
import { useState } from 'react';
import {RiCloseCircleLine} from 'react-icons/ri';


function Card({motiveCard}){

    const [eventList, setEventList] = useState([]);

    const getEvents = () => {
        Axios.get('http://localhost:3001/events').then((response) => {
           setEventList(response.data);
        });
    }

    const deleteEvent = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
          setEventList(
            eventList.filter((val) => {
              return val.id != id;
            })
          );
        });
      };

    return (
        <>
        <div>
           {getEvents()}  
        </div>
        <div className="tracking-con2">
            
            {
                eventList.map((card) => {
                    return (
                        <div>
                            <div className='tracking-input2'>
                                {card.title}
                                <div className='delete-icon'>
                                <RiCloseCircleLine onClick={() => {deleteEvent(card.id)}}/>
                                 </div>    
                            </div>   
                        </div>

                    )
                })
            }
        </div>
        </>
    )
}
export default Card;