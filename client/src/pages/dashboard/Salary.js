import { useState } from 'react'
import { FormRow,Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'


const initialState = {

}


const Salary = () => {
    const [values, setValues] = useState(initialState);
    const { salary,  showAlert, displayAlert, updateSalary , isLoading, handleChange } = useAppContext();

    const [basic_pay_amount , setBasicPayAmount] = useState(salary?.basic_pay_amount);
    const [special_pay_amount , setSpecialPayAmount] = useState(salary?.special_pay_amount);
    const [arrear_pay_amount , setArrearPayAmount] = useState(salary?.arrear_pay_amount);
    const [dear_allow_amount , setDearnessAllowanceAmount] = useState(salary?.dear_allow_amount);    
    const [house_rent_allow_amount , setHouseRentAllowanceAmount] = useState(salary?.house_rent_allow_amount);    
    const [medi_allow_amount , setMedicalAllowanceAmount] = useState(salary?.medi_allow_amount);    
    const [conveyance_allow_amount , setConveyanceAllowanceAmount] = useState(salary?.conveyance_allow_amount);    
    const [festival_allow_amount , setFestivalAllowanceAmount] = useState(salary?.festival_allow_amount);    
    const [support_staff_allow_amount , setSupportStaffAllowanceAmount] = useState(salary?.support_staff_allow_amount);
    const [leave_allow_amount , setLeaveAllowanceAmount] = useState(salary?.leave_allow_amount);    
    const [honour_reward_fee_amount , setHonourRewardFeeAmount] = useState(salary?.honour_reward_fee_amount);    
    const [overtime_allow_amount , setOvertimeAllowanceAmount] = useState(salary?.overtime_allow_amount);    
    const [bonus_ex_gracia_amount , setBonusAmount] = useState(salary?.bonus_ex_gracia_amount);    
    const [other_allow_amount , setOtherAllowanceAmount] = useState(salary?.other_allow_amount);    
    const [gratuaty_amount , setGratuatyAmount] = useState(salary?.gratuaty_amount);    
    const [workers_part_fund_amount , setWorkersPartFundAmount] = useState(salary?.workers_part_fund_amount);    
    const [ecrp_fund_amount , setEcrpFundAmount] = useState(salary?.ecrp_fund_amount);    
    const [iarp_allow_amount , setIarpFundAmount] = useState(salary?.iarp_allow_amount);    
    const [di_trans_facility_amount , setDeemIncTransportAmount] = useState(salary?.di_trans_facility_amount);    
    const [di_free_accomodation_amount , setDeemIncFreeAmount] = useState(salary?.di_free_accomodation_amount);    
    const [other_amount , setOtherAmount] = useState(salary?.other_amount);    
    const [other_comment , setOtherComment] = useState(salary?.other_comment);
    const [total_taxable , setTotalTaxable] = useState(salary?.total_taxable);

    const handleSubmit = (e) => {
        console.log(other_comment);
        e.preventDefault();
        if(!basic_pay_amount) {
          displayAlert();
          return;  
        }
    
        updateSalary({ basic_pay_amount ,special_pay_amount ,arrear_pay_amount ,dear_allow_amount ,
            house_rent_allow_amount ,medi_allow_amount ,conveyance_allow_amount ,festival_allow_amount ,support_staff_allow_amount ,leave_allow_amount ,honour_reward_fee_amount ,overtime_allow_amount,bonus_ex_gracia_amount ,other_allow_amount ,gratuaty_amount ,workers_part_fund_amount ,ecrp_fund_amount,iarp_allow_amount ,di_trans_facility_amount ,di_free_accomodation_amount ,other_amount ,other_comment
        });
    }

    const handleChangeState = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }
    const handleSelectInput = (e) => {
        handleChange({ name: e.target.name, value: e.target.value })
    }



    return (
        <Wrapper>
            <h1>Salary</h1>
        <form className='form' onSubmit={handleSubmit}>
            
            {showAlert && <Alert />}

            {/* name */}
            <div className='form-center'>
            <FormRow
                type='number'
                name='basic_pay_amount'
                value={basic_pay_amount}
                handleChange={(e) => setBasicPayAmount(e.target.value)}
                labelText='Basic Pay(amount)'
                hoverText="Basic payment"
            />
            

            <FormRow
                type='number'
                name='special_pay_amount'
                value={special_pay_amount}
                handleChange={(e) => setSpecialPayAmount(e.target.value)}
                labelText='Special Pay(amount)'
                hoverText=''
            />
            

            
            <FormRow
                type='number'
                name='arrear_pay_amount'
                value={arrear_pay_amount}
                handleChange={(e) => setArrearPayAmount(e.target.value)}
                labelText='Arrear Pay(amount)'
                hoverText=''
            />
           
            
            
            <FormRow
                type='number'
                name='dear_allow_amount'
                value={dear_allow_amount}
                handleChange={(e) => setDearnessAllowanceAmount(e.target.value)}
                labelText='Dearness Allowance(amount)'
                hoverText=''
            />
           
            
            
            <FormRow
                type='number'
                name='house_rent_allow_amount'
                value={house_rent_allow_amount}
                handleChange={(e) => setHouseRentAllowanceAmount(e.target.value)}
                labelText='House Rent Allowance(amount)'
                hoverText=''
            />
           
            
            
            <FormRow
                type='number'
                name='medi_allow_amount'
                value={medi_allow_amount}
                handleChange={(e) => setMedicalAllowanceAmount(e.target.value)}
                labelText='Medical Allowance(amount)'
                hoverText=''
            />
            
            
            
            <FormRow
                type='number'
                name='conveyance_allow_amount'
                value={conveyance_allow_amount}
                handleChange={(e) => setConveyanceAllowanceAmount(e.target.value)}
                labelText='Conveyance Allowance(amount)'
                hoverText=''
            />
           
            
            
            <FormRow
                type='number'
                name='festival_allow_amount'
                value={festival_allow_amount}
                handleChange={(e) => setFestivalAllowanceAmount(e.target.value)}
                labelText='Festival Allowance(amount)'
                hoverText=''
            />
           
            
            
            <FormRow
                type='number'
                name='support_staff_allow_amount'
                value={support_staff_allow_amount}
                handleChange={(e) => setSupportStaffAllowanceAmount(e.target.value)}
                labelText='Allowance for support staff(amount)'
                hoverText=''
            />
            
            
            
            <FormRow
                type='number'
                name='leave_allow_amount'
                value={leave_allow_amount}
                handleChange={(e) => setLeaveAllowanceAmount(e.target.value)}
                labelText='Leave Allowance(amount)'
                hoverText=''
            />

           
            
            
            <FormRow
                type='number'
                name='honour_reward_fee_amount'
                value={honour_reward_fee_amount}
                handleChange={(e) => setHonourRewardFeeAmount(e.target.value)}
                labelText='Honorarium/ Reward/Fee(amount)'
                hoverText=''
            />
            
            
            
            <FormRow
                type='number'
                name='overtime_allow_amount'
                value={overtime_allow_amount}
                handleChange={(e) => setOvertimeAllowanceAmount(e.target.value)}
                labelText='Overtime Allowance(amount)'
                hoverText=''
            />
           
            
            
            <FormRow
                type='number'
                name='bonus_ex_gracia_amount'
                value={bonus_ex_gracia_amount}
                handleChange={(e) => setBonusAmount(e.target.value)}
                labelText='Bonus / Ex-gratia(amount)'
                hoverText=''
            />
           
            
            
            <FormRow
                type='number'
                name='other_allow_amount'
                value={other_allow_amount}
                handleChange={(e) => setOtherAllowanceAmount(e.target.value)}
                labelText='Other Allowance(amount)'
                hoverText=''
            />
            
            
            
            <FormRow
                type='number'
                name='gratuaty_amount'
                value={gratuaty_amount}
                handleChange={(e) => setGratuatyAmount(e.target.value)}
                labelText='Gratuaty(amount)'
                hoverText=''
            />
            
            
            
            <FormRow
                type='number'
                name='workers_part_fund_amount'
                value={workers_part_fund_amount}
                handleChange={(e) => setWorkersPartFundAmount(e.target.value)}
                labelText='Workers Participation Fund(amount)'
                hoverText=''
            />
            
            
            
            <FormRow
                type='number'
                name='ecrp_fund_amount'
                value={ecrp_fund_amount}
                handleChange={(e) => setEcrpFundAmount(e.target.value)}
                labelText='Employer’s contribution to a recognized provident fund(amount)'
                hoverText=''
            />
           
            
            
            <FormRow
                type='number'
                name='iarp_allow_amount'
                value={iarp_allow_amount}
                handleChange={(e) => setIarpFundAmount(e.target.value)}
                labelText='Interest accrued on a recognized provident fund(amount)'
                hoverText=''
            />
            
            
            
            <FormRow
                type='number'
                name='di_trans_facility_amount'
                value={di_trans_facility_amount}
                handleChange={(e) => setDeemIncTransportAmount(e.target.value)}
                labelText='Deemed income for transport facility(amount)'
                hoverText=''
            />
           
            
            
            <FormRow
                type='number'
                name='di_free_accomodation_amount'
                value={di_free_accomodation_amount}
                handleChange={(e) => setDeemIncFreeAmount(e.target.value)}
                labelText='Deemed income for free furnished/unfurnished accommodation(amount)'
                hoverText=''
            />
            
            
            
            <FormRow
                type='number'
                name='other_amount'
                value={other_amount}
                handleChange={(e) => setOtherAmount(e.target.value)}
                labelText='Other(amount)'
                hoverText=''
            />
            

            <FormRow
                type='text'
                name='other_comment'
                value={other_comment}
                handleChange={(e) => setOtherComment(e.target.value)}
                labelText='Other comment'
                hoverText=''
            />
            



            <button className='btn btn-block' type='submit' disabled={isLoading}>
                {isLoading ? 'Please Wait...' : 'save changes'}
            </button>

            <FormRow
                type='number'
                name='total_taxable'
                value={total_taxable}
                // handleChange={(e) => setOtherComment(e.target.value)}
                labelText='Total Taxable Amount'
            />
            </div> 
        </form>
    </Wrapper>
    )
}



export default Salary;   