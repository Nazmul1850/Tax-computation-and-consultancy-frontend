import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import AllQa from "../../apis/getQa";
import Wrapper from "../../assets/wrappers/ConsultInfo";
import { useAppContext } from '../../context/appContext';

import { QaCard } from "../../components";
import { merge } from "lodash";


const client = JSON.parse(localStorage.getItem('client'))

const init = {
    hasClient: localStorage.getItem('client')?true:false
}

const ConsultaionInfo = () => {

    const [state, setstate] = useState(init);
    const [allQa, setAllQa] = useState([]);
    const [savedQa, setsavedQa] = useState([]);
    const {token, isClientPresent} = useAppContext();

    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        console.log("shuru");
        console.log(lowerCase);
        let tempQa = [];
        savedQa.map((qa) => {
            let merge = JSON.stringify(qa).toLocaleLowerCase();
            console.log(lowerCase, merge.includes(lowerCase), merge)
            if(merge.includes(lowerCase)) tempQa.push(qa);
        })
        console.log("temp" + tempQa.map((t) => console.log(t)));
        setAllQa(tempQa);

        

      };

    useEffect(()=>{
        if(isClientPresent) {
            const clientId = client._id;
            console.log("outside",clientId)
            AllQa({token, clientId }).then((data) => {
                const filterData = data.filter((d) => d.qNo !== 0)
                console.log(filterData);
                setAllQa(filterData);
                setsavedQa(filterData);
            })
        }
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

            {isClientPresent && (
                allQa.map((qa) => (
                    <QaCard key={qa._id} question={qa.question} answer={qa.answer}/>
                ))
            )}
            {!isClientPresent && (
                <div>Please Select Client</div>
            )}
        </Wrapper>
    )
}
export default ConsultaionInfo;