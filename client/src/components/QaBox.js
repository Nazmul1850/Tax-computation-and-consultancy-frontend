import React from 'react'
import Wrapper from '../assets/wrappers/QaBox';
import Option from './Option';

const QaBox = ({question,optionlist,type, toggleConsultation}) => {

    var options = []
    for (var i=0; i < optionlist.length;i++) {
        options.push(<Option
                        id = {optionlist[i].next}
                        text= {optionlist[i].option}
                        type={type}
                        ></Option>)
    }
    return (
        <Wrapper>
            <div class="quiz-container" id="quiz">
                <div class="quiz-header">
                <h3 id="question">{question}</h3>
                <ul>
                    {options}
                </ul>
                <div className='skip-button'>
                    <button className='btn btn-block skip' type='submit' onClick={toggleConsultation}>
                                Skip
                    </button>
                </div>
                
            </div>

        </div>
        </Wrapper>
    )
}
export default QaBox;