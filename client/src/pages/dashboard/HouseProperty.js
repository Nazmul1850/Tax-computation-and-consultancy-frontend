import { useState } from 'react'
import {FormRow,Alert, FormRowSelect} from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'


const initialState = {}



const HouseProperty = () => {
    const [values, setValues] = useState(initialState);
    const { house,  showAlert, displayAlert, updateHouse , isLoading, handleChange } = useAppContext();

    const [address , setAddress] = useState(house?.address);
    const [total_area , setTotalArea] = useState(house?.total_area);
    const [share , setShare] = useState(house?.share);
    const [annual_value , setAnnualValue] = useState(house?.annual_value);
    const [repair , setRepair] = useState(house?.repair);
    const [municipal , setMunicipal] = useState(house?.municipal);
    const [land_rev , setLandRev] = useState(house?.land_rev);
    const [loan_mort , setLoan] = useState(house?.loan_mort);
    const [insurance_premium , setInsurance] = useState(house?.insurance_premium);
    const [vacancy_allow , setVacancyAllowance] = useState(house?.vacancy_allow);
    const [other , setOther] = useState(house?.other);
    const [other_comment , setOtherComment] = useState(house?.other_comment);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!address || !total_area || !share || !annual_value || !repair || !municipal || !land_rev || !loan_mort || !insurance_premium || !vacancy_allow || !other || !other_comment) {
          displayAlert();
          return;  
        }
    
        updateHouse({ address, total_area, share, annual_value, repair, municipal, land_rev, loan_mort, insurance_premium, vacancy_allow,  other, other_comment });
    }

    const handleChangeState = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }
    const handleSelectInput = (e) => {
        handleChange({ name: e.target.name, value: e.target.value })
    }


    


    return (

        <Wrapper>
        <form className='form' onSubmit={handleSubmit}>
            <h3>HouseProperty </h3>
            {showAlert && <Alert />}

            {/* name */}
            <div className='form-center'>
            <FormRow
                type='text'
                name='address'
                value={address}
                handleChange={(e) => setAddress(e.target.value)}
                labelText='Address'
            />
            <FormRow
                type='number'
                name='total_area'
                value={total_area}
                handleChange={(e) => setTotalArea(e.target.value)}
                labelText=''
            />
            <FormRow
                type='number'
                name='share'
                value={share}
                handleChange={(e) => setShare(e.target.value)}
                labelText='Share of the Assessee (%)'
            />
            <FormRow
                labelText='Annual Value'
                type='number'
                name='annual_value'
                value={annual_value}
                handleChange={(e) => setAnnualValue(e.target.value)}
                
            />
            <FormRow
                type='number'
                name='repair'
                value={repair}
                handleChange={(e) => setRepair(e.target.value)}
                labelText='Repair, Collection, etc.'
            />
            <FormRow
                type='number'
                name='municipal'
                value={municipal}
                handleChange={(e) => setMunicipal(e.target.value)}
                labelText='Municipal or Local Tax'
            />
            <FormRow
                type='number'
                name='land_rev'
                value={land_rev}
                handleChange={(e) => setLandRev(e.target.value)}
                labelText='Land Revenue'
            />
            <FormRow
                type='number'
                name='loan_mort'
                value={loan_mort}
                handleChange={(e) => setLoan(e.target.value)}
                labelText='Interest on Loan/Mortgage/Capital Charge'
            />
            <FormRow
                type='number'
                name='insurance_premium'
                value={insurance_premium}
                handleChange={(e) => setInsurance(e.target.value)}
                labelText='Insurance Premium'
            />
            <FormRow
                type='number'
                name='vacancy_allow'
                value={vacancy_allow}
                handleChange={(e) => setVacancyAllowance(e.target.value)}
                labelText='Vacancy Allowance'
            />
            <FormRow
                labelText='Other , if any'
                type='number'
                name='other'
                value={other}
                handleChange={(e) => setOther(e.target.value)}
                
            />
            <FormRow
                labelText='Other comment'
                type='text'
                name='other_comment'
                value={other_comment}
                handleChange={(e) => setOtherComment(e.target.value)}
            />
            <button className='btn btn-block' type='submit' disabled={isLoading}>
                {isLoading ? 'Please Wait...' : 'save changes'}
            </button>
            </div>
        </form>
    </Wrapper>
    )
}
export default HouseProperty;