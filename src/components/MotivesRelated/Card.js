import React from "react";
import './Motive.css';

function Card({motiveCard}){
    return (
        <div className="card">
            {
                motiveCard.map((card) => {
                    return (
                        <div className='card-con' key={card.id}>
                            <h2 className="cardTitle">{card.title}</h2>
                            <p className='address'>{card.addi1},</p>
                            <p className='address'>{card.addi2},</p>
                            <p className='address'>{card.postcode}</p>
                            <p className='date'>{card.date}</p>
                            <text className='cost'>{card.cost}</text>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Card;