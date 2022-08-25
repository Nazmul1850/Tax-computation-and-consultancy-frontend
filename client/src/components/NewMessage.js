import React, { useState } from 'react';
import { Button } from 'react-scroll';
import Wrapper from '../assets/wrappers/QaBox';
import { useAppContext } from '../context/appContext';

const initQ = {
    name:''
}

const NewMessage = ({type,name}) => {
    const [values, setValues] = useState(initQ)

    const {saveMsg} = useAppContext();


    const handleChange = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(values.name)
        setValues({...values, [e.target.name]:e.target.value})
        const name = values.name
        const time = Date.now()
        const reciver = "62f94927b480484ac98b6453"
        saveMsg({name, time,reciver})
        return
    }

    return (
        <Wrapper>
            <form className='form' onSubmit={onSubmit}>
                <input
                    type={type}
                    name={name}
                    value={values.name}
                    onChange={handleChange}
                    className='form-input'
                />
                <button type="submit" >Submit</button>
            </form>
            
        </Wrapper>
  )
}
export default NewMessage;