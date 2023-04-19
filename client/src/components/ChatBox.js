import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import {BiMessageAdd} from 'react-icons/bi'
import Wrapper from '../assets/wrappers/DashboardFormPage';
import Thread from './Thread';
import FormRow from './FormRow';
import NewMessage from './NewMessage';


const initState = {
    name:'',
    newThread:false
}


const ChatBox = ({msg, getMessages}) => {

    const [values,setValues] = useState(initState);
    

    const load = ()=> {
        getMessages()
        
    }

    const createNew = ()=> {
        console.log("New Thread Called");
        setValues({...values,newThread:!values.newThread})
    }

    const handleChange = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(values.name)
        setValues({...values, [e.target.name]:e.target.value})
    }
    
    
    return (
        <Wrapper>
            <h1>Chat Box</h1>
            <Fab color="primary" aria-label="add" onClick={createNew}>
                <BiMessageAdd />
            </Fab>
            <form className='form' onSubmit={onSubmit}>
            {values.newThread && (
                <form className='form' onSubmit={onSubmit}>
                    <NewMessage
                    type="text"
                    name={values.name}
                    onChange={handleChange}
                    />
                </form>
            ) 
            }
            </form>
            <Thread/>
            <button className='btn btn-block' type='submit' onClick={load}>
                            load
            </button>
        </Wrapper>
  )
}
export default ChatBox;