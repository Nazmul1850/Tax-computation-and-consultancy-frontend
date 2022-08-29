import { useState } from "react";
import Wrapper from "../assets/wrappers/CalculatorTable";
import { useNavigate } from 'react-router-dom';

function QaCard({body, count, setConsulting}) {

    const [answerList,setAnswerList] = useState([]);
    const navigate = useNavigate();
    let state ;

    if(count === 1) {
      state = true;
    }else {
      state = false;
    }
    console.log(count);
    const navigateTo = () => {
      setTimeout(() => {
        setConsulting();
        navigate('/consultation');
      }, 500);
    }
    return (
        <Wrapper>
          <div className="notification-box" onClick={navigateTo}>
  
                  {state && (
                    <>
                      <p className="notification-body">{body}</p>
                    </>
                  )}
                  {!state && (
                      <>
                        <p className="notification-body">{body}</p>
                      </>
                    )}

              </div>
          </Wrapper>

    );
  }
  export default QaCard;
  