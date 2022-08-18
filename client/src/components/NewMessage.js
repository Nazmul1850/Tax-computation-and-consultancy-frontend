import React from 'react'
import { Button } from 'react-scroll';
import Wrapper from '../assets/wrappers/QaBox';

const NewMessage = ({type,name,handleChange}) => {


    return (
        <Wrapper>
            
            <input
                type={type}
                name={name}
                onChange={handleChange}
                className='form-input'
            />
            <button type="submit" >Submit</button>
            
        </Wrapper>
  )
}
export default NewMessage;