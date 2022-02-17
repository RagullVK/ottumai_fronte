import { useState, useEffect } from "react";


//This is was used for the frontend

const useDetails = () =>{
    const [values,setValues] = useState({
        community:'',
        title:'',
        cost: '',
        date: '',
        link:'',
        address1:'',
        address2:'',
        postcode:'',
    })

    const handleChange = e => {
        setValues({
          ...values,
          [e.target.name]:  e.target.values
        })
    }

    return {handleChange, values}

}

export default useDetails