import React from 'react'
import  { useState } from 'react';
import Wrapper from '../assets/wrappers/QaBox';

const initMsg = [{
    body: "Test Msg",
    isLevel1: true,
    receiver: "",
    receiverIdModel: "",
    replies:[],
    sender: '',
    senderIdModel: "",
    time: "",
    _id: "",
    myMsg:true,
}]


const Thread = () => {
    const [values, setValues] = useState(initMsg);

    let currentMsgId = 0;

    
        
        // while(currentMsgId != allMsg.length) {
        //     values[currentMsgId].body = allMsg[currentMsgId.toString()].body;
        //     values[currentMsgId].isLevel1 = allMsg[currentMsgId.toString()].isLevel1;
        //     values[currentMsgId].receiver = allMsg[currentMsgId.toString()].receiver;
        //     values[currentMsgId].receiverIdModel = allMsg[currentMsgId.toString()].receiverIdModel;
        //     values[currentMsgId].replies = allMsg[currentMsgId.toString()].replies;
        //     values[currentMsgId].time = allMsg[currentMsgId.toString()].time;
        //     values[currentMsgId]._id = allMsg[currentMsgId.toString()]._id;
        //     console.log(currentMsgId)
        //     console.log(values);
        //     setValues({...values});
        //     currentMsgId++;
        // }
        
        
    

    const loadText = () => {
        const allMsg = JSON.parse(localStorage.getItem('allMsg'))['1'];
        if(allMsg) {
            console.log("All Should be here");
            allMsg.forEach(element => {
                console.log(element);
                console.log(element.sender);
                console.log(element.body);
                let text ;
                const sender = document.createElement("div");
                text = element.sender;
                const textsender = document.createTextNode(text);
                sender.appendChild(textsender);
                document.getElementById("thread").appendChild(sender);
                const body = document.createElement('div');
                body.className = 'body'
                text = element.body;
                const textbody = document.createTextNode(text);
                body.appendChild(textbody);
                document.getElementById("thread").appendChild(body);
            });

        }
    }

    const appendReply = () => {
        console.log('Reply called');
    }



    return (
        <Wrapper>
            <p>Thread Here</p>
            
            <button id="thread" onClick={loadText}></button>

            <button onClick={appendReply}> Replies</button>
            
            
        </Wrapper>
  )
    
}
export default Thread;