import React from 'react'
import Wrapper from '../assets/wrappers/QaBox';

const Option = ({id,text,type}) => {
    const labelId = id.toString() + "_text";
    return (
        <Wrapper>
            <li>
                <input type={type} name="answer" id={id} className="answer" value={text}/>
                <label for={id} id={labelId}>{text}</label>
            </li>
        </Wrapper>
  )
}
export default Option;