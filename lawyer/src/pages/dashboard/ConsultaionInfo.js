import { useEffect, useState } from "react"
import {useAppContext} from '../../context/appContext'
import Wrapper from "../../assets/wrappers/ConsultInfo"
import AllQa from "../../apis/getQa"
import TextField from "@mui/material/TextField";

import {QaCard} from "../../components"


const client = JSON.parse(localStorage.getItem('client'))

const init = {
    hasClient: localStorage.getItem('client')?true:false
}

const ConsultaionInfo = () => {

    const [state, setstate] = useState(init);
    const [allQa, setAllQa] = useState([]);
    const {token} = useAppContext();
    const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        console.log(lowerCase);
        setInputText(lowerCase);
        let tempQa;
        console.log(allQa)
        if(inputText !== '') {
            allQa.map((qa) => {
                let regPera = JSON.stringify(qa);
                const regex =  inputText + "\\w+" ; 
                console.log(regPera);
                console.log(regex);
                console.log("Result" , regPera.match(regex));
            })            
        }

      };

    useEffect(()=>{
        const clientId = client._id;
        console.log("outside",clientId)
        AllQa({token, clientId }).then((data) => {
            const filterData = data.filter((d) => d.qNo !== 0)
            console.log(filterData);
            setAllQa(filterData);
        })
    },[]);
    

    return (
        <Wrapper>
            <div className="card-title">
                <div className="text-center">
                    Search and Analyze clients Needs..
                </div>
            </div>
            <div className="search">
                <TextField
                id="outlined-basic"
                onChange={inputHandler}
                variant="outlined"
                fullWidth
                label="Search"
                />
            </div>

            {state.hasClient && (
                allQa.map((qa) => (
                    <QaCard key={qa._id} question={qa.question} answer={qa.answer}/>
                ))
            )}
            {!state.hasClient && (
                <div>There is No Client</div>
            )}
        </Wrapper>
    )
}
export default ConsultaionInfo;