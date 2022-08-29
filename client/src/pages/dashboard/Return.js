import { useState } from "react";
import Wrapper from "../../assets/wrappers/Return";
import Tables from '../../components/ReportTables'
import { useAppContext } from "../../context/appContext";

const initState = {
    assessmentYear : '2016-17',
    name : 'Sattyajit',
    TIN : '812365785415',
    gender : 'Male'
}

const Return = () => {
    const {user, token} = useAppContext();
    const [basicInfo , setBasicInfo] = useState(initState);
    return (
        <Wrapper>
            <div className="return-tables">
                <Tables props={initState} title="kisu nah" />
            </div>
            
        </Wrapper>
    )
}
export default Return;