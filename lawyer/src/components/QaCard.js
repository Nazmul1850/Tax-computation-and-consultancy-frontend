import { useEffect, useState } from "react";

function QaCard({question, answer}) {

    const [answerList,setAnswerList] = useState([]);

    return (

          <div className="card qa-box" >
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
    );
  }
  export default QaCard;
  