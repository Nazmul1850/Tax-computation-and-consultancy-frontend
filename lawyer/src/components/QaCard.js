import { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/ConsultInfo";

function QaCard({question, answer}) {

    const [answerList,setAnswerList] = useState([]);

    return (
          <Wrapper>
          <div className="card" >
            <div className="p-3">
              <p className="card-text">{question}</p>
            </div>
            <div className="p-3">
              <p className="card-text">
                {answer.map((ans) => (
                  <>
                    <span>" </span>{ans}<span>" </span>
                  </>
                ))}
                </p>
              </div>
          </div>
          </Wrapper>
    );
  }
  export default QaCard;
  