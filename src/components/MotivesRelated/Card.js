import './Motive.css';
import Axios from "axios";
import { useState } from 'react';

function Card({motiveCard}){

    const [eventList, setEventList] = useState([]);

    const getEvents = () => {
        Axios.get('http://localhost:3001/events').then((response) => {
           setEventList(response.data);
        });
    }
    
    return (
        <>
        <div>
           {getEvents()}  
        </div>
        <div className="card">
            
            {
                eventList.map((card) => {
                    return (
                        <a  href={card.link} target='_blank' className='card-con' key={card.id}>
                            <h2 className="cardTitle">{card.title}</h2>
                            <p className='address'>{card.addi1},</p>
                            <p className='address'>{card.addi2},</p>
                            <p className='address'>{card.pobox}</p>
                            <p className='date'>{card.date}</p>
                            <text className='cost'>{card.cost}</text>
                        </a>
                    )
                })
            }
        </div>
        </>
    )
}
export default Card;