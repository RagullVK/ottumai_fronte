import { useState, useEffect } from "react";

const useDetails = () =>{
    const [values,setValues] = useState({
        community:'',
        title:'',
        cost: '',
        date: '',
        link:'',
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