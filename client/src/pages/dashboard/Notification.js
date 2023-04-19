import React , { useEffect, useState } from 'react'
import getAllHouse from '../../apis/getHouses';
import TextField from "@mui/material/TextField";
import { useAppContext } from '../../context/appContext';
import { HouseContainer } from '../../components';
import QaCard from '../../components/QaCard';
import AllNotification from '../../apis/getNotification';





const Notification = () => {

    const [allNotification, setNotification] = useState([]);
    const {token, setConsulting} = useAppContext();
    


    let inputHandler = (e) => {
        //convert input text to lower case
        // var lowerCase = e.target.value.toLowerCase();
        // console.log("shuru");
        // console.log(lowerCase);
        // let tempQa = [];
        // savedQa.map((qa) => {
        //     let merge = JSON.stringify(qa).toLocaleLowerCase();
        //     console.log(lowerCase, merge.includes(lowerCase), merge)
        //     if(merge.includes(lowerCase)) tempQa.push(qa);
        // })
        // console.log("temp" + tempQa.map((t) => console.log(t)));
        // setAllQa(tempQa);
        console.log("inputCalled");
        

      };

      useEffect(()=>{
        AllNotification({token }).then((data) => {
            console.log(data);
            data.sort(
                (a, b) =>
                new Date(b.time).getTime() - new Date(a.time).getTime()
            );
            
            setNotification(data);

            })
    },[]);


    return (
        <>
            <div className="card-title">
                <div className="text-center">
                    Watch Your Notification...
                </div>
            </div>
            {allNotification.map((qa) => (
                    <QaCard key={qa._id} body={qa.body} count={qa.count} setConsulting={setConsulting}/>
            ))}

        </>
    )

}

export default Notification;
