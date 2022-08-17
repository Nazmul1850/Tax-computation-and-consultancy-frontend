import React from 'react'
import Wrapper from '../assets/wrappers/QaBox';

const Option = ({id,text}) => {
    const labelId = id.toString() + "_text";
    return (
        <Wrapper>
            <li>
                <input type="radio" name="answer" id={id} class="answer"/>
                <label for={id} id={labelId}>{text}</label>
            </li>
        </Wrapper>
  )
}
export default Option;