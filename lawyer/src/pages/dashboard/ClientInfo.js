import { useEffect, useState } from "react";
import Wrapper from "../../assets/wrappers/ClientInfo";
import Salary from "../../components/Salary";
import { useAppContext } from "../../context/appContext";

const ClientInfo = () => {
    const {client,isClientPresent} = useAppContext();
    const [salary, setSalary] = useState(false);
    const [investment, setInvestment] = useState(false);
    const [business, setBusiness] = useState(false);
    const [houseProperty, setHouseProperty] = useState(false);
    const [files, setFiles] = useState(false);
    const [calculator, setCalculator] = useState(false);


    

    const updateState = (state) => {
        console.log("update called");
        setSalary(false);
        setBusiness(false);
        setInvestment(false);
        setFiles(false);
        setHouseProperty(false);
        setCalculator(false);

        if(state === "salary") {
            setSalary(true);
        }
        if(state === "investment") {
            setInvestment(true);
        }
        if(state === "houseProperty") {
            setHouseProperty(true);
        }
        if(state === "business") {
            setBusiness(true);
        }
        if(state === "files") {
            setFiles(true);
        }
        if(state === "calculator") {
            setCalculator(true);
        }
    }
    return (
        <Wrapper>
            {!isClientPresent && (
                <div> 
                    Please Select Client
                </div>
            )}
            {isClientPresent && (
                <>
                <div className="profile-info" >
                <div className="profile-phone text-center">
                        <>Name: </>{client.name}
                    </div>
                    <div className="profile-email text-center">
                        <>Email: </>{client.email}
                    </div>
                    <div className="profile-phone text-center">
                        <>Phone: 0</>{client.phone}
                    </div>
                    <div className="profile-gender text-center">
                        <>Gender: </>{client.gender}
                    </div>
                    <div className="profile-birthday text-center">
                        <>Birthdate: </>{client.birthdate}
                    </div>
                    <div className="profile-address text-center">
                        {client.address}
                    </div>
                    <div className="profile-circle text-center">
                        <>Circle: </>{client.circle}
                    </div>
                    <div className="profile-zone text-center">
                        <>Zone: </>{client.zone}
                    </div>
                </div>
                <div className="info-links">
                    <button className="btn btn-block law" onClick={() => updateState("salary")}>Salary</button>
                    <button className="btn btn-block law" onClick={() => updateState("investment")}>Investment</button>
                    <button className="btn btn-block law" onClick={() => updateState("business")}>Business</button>
                    <button className="btn btn-block law" onClick={() => updateState("houseProperty")}>House Property</button>
                    <button className="btn btn-block law" onClick={() => updateState("files")}>Files</button>
                    
                    <button className="btn btn-block law" onClick={() => updateState("calculator")}>Calculator</button>
                </div>
                <div className="form-information">
                    {salary && (
                        <Salary clientId={client._id}/>
                    )}
                    {investment && (
                        <div>Investment Called</div>
                    )}
                    {houseProperty && (
                        <div>House Called</div>
                    )}
                    {business && (
                        <div>Business Called</div>
                    )}
                    {files && (
                        <div>Files Called</div>
                    )}
                    {calculator && (
                        <div>Calculator Called</div>
                    )}
                </div>
                </>
            )}
        </Wrapper>
    )
}
export default ClientInfo;