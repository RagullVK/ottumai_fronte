import React from "react";
import './Motive.css';

function Button({button, filter}){
    return(
        <div className='buttons'>
            {
                button.map((category) =>{
                    return <button type = 'button' onClick={()=> filter(category)}
                    className='btn'>{category}</button>
                })
            }
        </div>
    )
}

export default Button