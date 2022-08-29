import { useState } from 'react'
import Wrapper from "../../assets/wrappers/Calculator";
import { useAppContext } from "../../context/appContext";
import {FaBusinessTime, FaCaretDown} from 'react-icons/fa'

import { FormRow, CalculatorTable } from '../../components';



const Calculator = () => {
    const { user, token } = useAppContext();
    const [showAsses, setShowAsses] = useState(false);
    const [assesList, setAssesList] = useState([1,2,3]);



    
    const time = new Date(user.income_year);
    const [assesInput, setAssesInput] = useState(time);
    console.log(time.getFullYear());
    const [currentAsses,setCurrentAsses] = useState(time.getFullYear() + "-" + (time.getFullYear() + 1).toString());

    return (
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
    )
}
export default Calculator;