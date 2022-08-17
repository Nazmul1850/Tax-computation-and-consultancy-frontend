
import { useState } from 'react'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { Alert, QA } from '../../components'
import Questions from '../../components/Questions'
import { useAppContext } from '../../context/appContext'





const initQ = {
    isConsulting:false,
    "id":0,
    "type":"radio",
    "tag":"basic",
    "pre":0,
    "question":"Eager to Provide us some Usefull information !!!",
    "optionlist":[
        {
            "option":"yes",
            "next": 1
        },
        {
            "option":"no",
            "next": -1              
        }
    ]
}



const Consultation = () => {
    const [values, setValues] = useState(initQ);
    const {showAlert, isConsulting } = useAppContext();
    let questionId = 1;
    console.log(values);


    const handleChangeState = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
      }
   

    const handleNext = (e) => {
        e.preventDefault()
        const answerEls = document.querySelectorAll('.answer') 
        let answer
        let text
        answerEls.forEach(answerEl => {
            if(answerEl.checked) {
                console.log(answerEl)
                answer = answerEl.id
                text = answerEl.value
            }
        })
        console.log(answer)
        if(parseInt(answer, 10) === -1) {
            
            setTimeout(() => {
                console.log("waiting")
                setValues({ ...values, isConsulting: !values.isConsulting })
                console.log(values.isConsulting)
                return
            },1000)
        }
        console.log(values.id,values.question,values.tag, text)
        let nextQuestion ;
        Questions.forEach(question => {
            if (question.id === parseInt(answer, 10)) {
                console.log("Found it")
                nextQuestion = question;
                console.log(nextQuestion)        
                values.id = nextQuestion.id;
                values.pre = nextQuestion.pre;
                values.question = nextQuestion.question;
                values.optionlist = nextQuestion.optionlist;
                setValues({...values});
                console.log(values)
            }
        });
    }
    
    const handlePre = (e) => {
        e.preventDefault()
        let nextQuestion ;
        console.log("Pre Called")
        console.log(values.pre)
        Questions.forEach(question => {
            if (question.id === values.pre) {
                nextQuestion = question;
                console.log(nextQuestion)        
                values.id = nextQuestion.id;
                values.pre = nextQuestion.pre;
                values.question = nextQuestion.question;
                values.optionlist = nextQuestion.optionlist;
                setValues({...values});
                console.log(values)
            }
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // const { gender, phone } = values
    }
    return (
        <Wrapper>
        <form className='form' onSubmit={handleSubmit}>
            {showAlert && <Alert />}
            {!values.isConsulting && 
                <div className='q-center'>
                    <QA
                        question={values.question} 
                        optionlist={values.optionlist}
                        type={values.type}
                    />
                    <div className='q-buttons'>
                        <button className='btn btn-block pre' type='submit' onClick={handlePre}>
                            Pre
                        </button>
                        <button className='btn btn-block next' type='submit' onClick={handleNext}>
                            Next
                        </button>
                    </div>
                </div>
        }
        {values.isConsulting && 
            <div>Consultation started</div>
        }
        
        </form>
        </Wrapper>
    )
}
export default Consultation;