import { useEffect, useState } from "react";
import AllClients from '../../apis/getClients';
import Wrapper from "../../assets/wrappers/ClientList";
import TextField from "@mui/material/TextField";

import { useNavigate } from 'react-router-dom';
import userLogo from "../../assets/images/user-icon.png";
import { useAppContext } from "../../context/appContext";

// const token = localStorage.getItem('token')



const Clients = () => {

    const [clients, setClients] = useState([]);
    const [savedClients, setsavedClients] = useState([]);
    const [inputText, setInputText] = useState("");
    const {setCurrentClient} = useAppContext();

    const navigate = useNavigate();

    const {token} = useAppContext();

    useEffect( ()=> {
        AllClients({token}).then((datas) => {
            console.log(datas)
            setClients(datas);
            setsavedClients(datas);
        });

    },[])


    const updateUserId = (client) => {
        console.log(client);
        localStorage.setItem('client',JSON.stringify(client));
        setCurrentClient(client);
        setTimeout(()=>{
            navigate('/clinfo')
        },1000)
    }

    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        console.log("shuru");
        console.log(lowerCase);
        setInputText(lowerCase);
        let tempQa = [];
        savedClients.map((qa) => {
            let merge = JSON.stringify(qa).toLocaleLowerCase();
            console.log(lowerCase, merge.includes(lowerCase), merge)
            if(merge.includes(lowerCase)) tempQa.push(qa);
        })
        console.log("temp" + tempQa.map((t) => console.log(t)));
        setClients(tempQa);

      };


    return (
        <Wrapper>
            <div className="card-title">
                <div className="text-center">
                    Search Clients
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
            <div className="clearfix">
            <div className="row">
            {clients.map(data => (
                <div className="card-key" key={data._id}>
                <div className="card-update" onClick={() => updateUserId(data)}>
                    <div className="avatar-update">
                        <img
                        src={userLogo}
                        className="card-img-top"
                        alt=""
                        />
                    </div>
                    <h5 className="card-title-update">
                        {data.name}
                    </h5>
                    <p className="card-text-update">
                            {data.email}
                        <br />
                        <span className="phone">{data.phone}</span>
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
      </Wrapper>
    )
}
export default Clients;