import React from 'react'
import Wrapper from '../assets/wrappers/QaBox';
import Option from './Option';

const QaBox = ({question,optionlist}) => {

    var options = []
    for (var i=0; i < optionlist.length;i++) {
        options.push(<Option
                        id = {i}
                        text= {optionlist[i].option}
                        ></Option>)
    }
    return (
        <Wrapper>
            <div class="quiz-container" id="quiz">
            <div class="quiz-header">
            <h2 id="question">{question}</h2>
            <ul>
                {options}
            </ul>
            </div>

        </div>
        </Wrapper>
    )
}
export default QaBox;