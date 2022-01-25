import { useState, useEffect } from "react";

const useDetails = () =>{
    const [values,setValues] = useState({
        community:'',
        title:'',
        descption:'',
        cost: '',
        date: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = e => {
        setValues({
          ...values,
          [e.target.name]:  e.target.values
        })
    }

    return {handleChange, values}

}

export default useDetails