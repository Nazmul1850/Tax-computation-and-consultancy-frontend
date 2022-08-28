import { useState } from 'react'
import Wrapper from "../../assets/wrappers/Calculator";
import { useAppContext } from "../../context/appContext";
import {FaBusinessTime, FaCaretDown} from 'react-icons/fa'
import Tables from '../../components/Tables'

import { FormRow } from '../../components';

const initState = {
    assessmentYear : '2016-17',
    name : 'Sattyajit',
    TIN : '812365785415',
    gender : 'Male'
}

const Calculator = () => {
    const { user } = useAppContext();
    const [showAsses, setShowAsses] = useState(false);
    const [assesList, setAssesList] = useState([1,2,3]);

    const [basicInfo , setBasicInfo] = useState(initState);
    const  tifs = {1: 'Joe', 2: 'Jane'};
    
    


    
    const time = new Date(user.income_year);
    const [assesInput, setAssesInput] = useState(time);
    console.log(time.getFullYear());
    const [currentAsses,setCurrentAsses] = useState(time.getFullYear() + "-" + (time.getFullYear() + 1).toString());

    return (
        <>
        <Wrapper>
            <div className='asees-container' >
                <button className='btn' onClick={() => setShowAsses(!showAsses)}>
                    <FaBusinessTime />
                        <span>Current Assesment : </span>{currentAsses}
                    <FaCaretDown />
                </button>
                <div className={showAsses ? 'dropdown show-dropdown' : 'dropdown'}>
                    {assesList.map((asses) => (
                        <button
                        className='dropdown-btn'
                        >
                            Logout
                        </button>
                    ))}
                </div>

                <FormRow
                    type='date'
                    name='assesInput'
                    value={assesInput}
                    handleChange={(e) => setAssesInput(e.target.value)}
                    isPro='false'
                />
                
            </div>
            
            
        </Wrapper>

        <Tables props={initState} title="kisu nah" />


       </>
    )
}
export default Calculator;