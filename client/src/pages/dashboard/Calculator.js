import { useState } from 'react'
import Wrapper from "../../assets/wrappers/Calculator";
import { useAppContext } from "../../context/appContext";
import {FaBusinessTime, FaCaretDown} from 'react-icons/fa'
import Tables from '../../components/Tables'

import { FormRow, CalculatorTable } from '../../components';



const initState = {
    assessmentYear : '2016-17',
    name : 'Sattyajit',
    TIN : '812365785415',
    gender : 'Male'
}

const Calculator = () => {
    const { user, token } = useAppContext();
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
            <div className='calculator-container'>
                <button className='btn' onClick={() => setShowAsses(!showAsses)}>
                    <FaBusinessTime />
                        <span>Current Assesment : </span>{currentAsses}
                    <FaCaretDown />
                </button>
                <div className='asees-container' >
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
                        name='basic_pay_amount'
                        value='basic_pay_amount'
                        labelText='Assesment'
                        isPro={true}
                    />
                    
                </div>
                <div className='table-container'>
                    <CalculatorTable token={token}/>
                </div>
            </div>
            
            
        </Wrapper>

        <Tables props={initState} title="kisu nah" />


       </>
    )
}
export default Calculator;