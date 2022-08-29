import { useEffect, useState } from 'react';
import { FaBusinessTime, FaCaretDown } from 'react-icons/fa';
import Wrapper from "../../assets/wrappers/Calculator";
import { useAppContext } from "../../context/appContext";

import Tables from '../../components/Tables'


import { CalculatorTable } from '../../components';

import CreateAsses from '../../apis/createAsses';
import AllAssesList from '../../apis/getAllAsses';



const initState = {
    assessmentYear : '2016-17',
    name : 'Sattyajit',
    TIN : '812365785415',
    gender : 'Male'
}

const Calculator = () => {
    const { user, token } = useAppContext();
    const [showAsses, setShowAsses] = useState(false);
    const [assesList, setAssesList] = useState([]);


    useEffect(()=>{
        var tempAsses = []
        AllAssesList({token}).then((al)=> {
            console.log('tempasses', al);
            for(let i=0; i < al.length; i++){
                let time = new Date(al[i].income_year);
                console.log('time', time);
                console.log('temp', time.getFullYear());
                tempAsses.push(al[i]);
            }
        })
        setAssesList(tempAsses);
    },[])

    const [basicInfo , setBasicInfo] = useState(initState);
    const  tifs = {1: 'Joe', 2: 'Jane'};
    

    
    let time = new Date(user.income_year);
    const [assesInput, setAssesInput] = useState('');
    console.log(time.getFullYear());
    const [currentAsses,setCurrentAsses] = useState(time.getFullYear() + "-" + (time.getFullYear() + 1).toString());

    const handleCreate = ()=> {
        console.log(assesInput);
        CreateAsses({token, assesInput}).then((data)=> {
            console.log(data);
            localStorage.setItem('user',data);
        })
        assesList.map((asses) => {
                console.log('asseslist',asses);
        })

    }
    const setCurrentAssesId= (id) => {
        console.log("Cuurent ASS",id);
    }

    return (
        <>
        <Wrapper>
            <div className='calculator-container'>

                <div className='asees-container' >
                    <div className='asses-create'>
                        <input
                            type='date'
                            value={assesInput}
                            name='income_year'
                            onChange={(e) => setAssesInput(e.target.value)}
                            className='input'
                            labelText ="Assesment"
                        />
                        <button className='btn' onClick={handleCreate}>Create</button>
                    </div>
                    <button className='btn' onClick={() => setShowAsses(!showAsses)}>
                        <FaBusinessTime />
                            <span>Current Assesment : </span>{currentAsses}
                        <FaCaretDown />
                    </button>
                    <div className={showAsses ? 'dropdown show-dropdown' : 'dropdown'}>
                        <ul>
                        {assesList.map((ass)=>(
                            <li key={ass._id} className='btn' onClick={setCurrentAssesId(ass._id)}>{ass.income_year}</li>
                        ))}
                        </ul>
                    </div>
                    
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