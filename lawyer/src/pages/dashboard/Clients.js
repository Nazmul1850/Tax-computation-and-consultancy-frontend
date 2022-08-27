import { useEffect, useState } from "react";
import AllClients from '../../apis/getClients';
import Wrapper from "../../assets/wrappers/ClientList";

import { useNavigate } from 'react-router-dom';
import userLogo from "../../assets/images/user-icon.png";
import { useAppContext } from "../../context/appContext";

// const token = localStorage.getItem('token')



const Clients = () => {

    const [clients, setClients] = useState([]);

    const navigate = useNavigate();

    const {token} = useAppContext();

    useEffect( ()=> {
        AllClients({token}).then((datas) => {
            console.log(datas)
            setClients(datas);
        });

    },[])


    const updateUserId = (client) => {
        console.log(client);
        localStorage.setItem('client',JSON.stringify(client));
        setTimeout(()=>{
            navigate('/consultation')
        },1000)
    }

    return (
        <Wrapper>
            <div className="clearfix">
            <div className="row">
            {clients.map(data => (
                <div className="col-md-4 animated fadeIn" key={data._id}>
                <div className="card" onClick={() => updateUserId(data)}>
                    <div className="card-body">
                    <div className="avatar">
                        <img
                        src={userLogo}
                        className="card-img-top"
                        alt=""
                        />
                    </div>
                    <h5 className="card-title">
                        {data.name}
                    </h5>
                    <p className="card-text">
                            {data.email}
                        <br />
                        <span className="phone">{data.phone}</span>
                    </p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
      </Wrapper>
    )
}
export default Clients;