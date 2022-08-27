
import { useEffect, useState } from 'react'
import { FormRow,Alert } from '../components'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import GetSalary from '../apis/getSalary'





const Salary = ({clientId}) => {

    const { token, client, showAlert, displayAlert, updateSalary , isLoading, handleChange } = useAppContext();
    const [salary, setSalary] = useState([]); 


   
    console.log("Print ",salary.data);
    const [basic_pay_amount , setBasicPayAmount] = useState(0);
    const [special_pay_amount , setSpecialPayAmount] = useState(0);
    const [arrear_pay_amount , setArrearPayAmount] = useState(0);
    const [dear_allow_amount , setDearnessAllowanceAmount] = useState(0);    
    const [house_rent_allow_amount , setHouseRentAllowanceAmount] = useState(0);    
    const [medi_allow_amount , setMedicalAllowanceAmount] = useState(0);    
    const [conveyance_allow_amount , setConveyanceAllowanceAmount] = useState(0);    
    const [festival_allow_amount , setFestivalAllowanceAmount] = useState(0);    
    const [support_staff_allow_amount , setSupportStaffAllowanceAmount] = useState(0);
    const [leave_allow_amount , setLeaveAllowanceAmount] = useState(0);    
    const [honour_reward_fee_amount , setHonourRewardFeeAmount] = useState(0);    
    const [overtime_allow_amount , setOvertimeAllowanceAmount] = useState(0);    
    const [bonus_ex_gracia_amount , setBonusAmount] = useState(0);    
    const [other_allow_amount , setOtherAllowanceAmount] = useState(0);    
    const [gratuaty_amount , setGratuatyAmount] = useState(0);    
    const [workers_part_fund_amount , setWorkersPartFundAmount] = useState(0);    
    const [ecrp_fund_amount , setEcrpFundAmount] = useState(0);    
    const [iarp_allow_amount , setIarpFundAmount] = useState(0);    
    const [di_trans_facility_amount , setDeemIncTransportAmount] = useState(0);    
    const [di_free_accomodation_amount , setDeemIncFreeAmount] = useState(0);    
    const [other_amount , setOtherAmount] = useState(0);    
    const [other_comment , setOtherComment] = useState('');
    const [total_taxable , setTotalTaxable] = useState(0);

    const handleSubmit = (e) => {
        console.log(other_comment);
        e.preventDefault();
        if(!basic_pay_amount) {
          displayAlert();
          return;  
        }
        console.log( "Salaryyyyy ",basic_pay_amount ,special_pay_amount ,arrear_pay_amount ,dear_allow_amount ,
            house_rent_allow_amount ,medi_allow_amount ,conveyance_allow_amount ,festival_allow_amount ,support_staff_allow_amount ,leave_allow_amount ,honour_reward_fee_amount ,overtime_allow_amount,bonus_ex_gracia_amount ,other_allow_amount ,gratuaty_amount ,workers_part_fund_amount ,ecrp_fund_amount,iarp_allow_amount ,di_trans_facility_amount ,di_free_accomodation_amount ,other_amount ,other_comment
        );
        updateSalary({ clientId,basic_pay_amount ,special_pay_amount ,arrear_pay_amount ,dear_allow_amount ,
            house_rent_allow_amount ,medi_allow_amount ,conveyance_allow_amount ,festival_allow_amount ,support_staff_allow_amount ,leave_allow_amount ,honour_reward_fee_amount ,overtime_allow_amount,bonus_ex_gracia_amount ,other_allow_amount ,gratuaty_amount ,workers_part_fund_amount ,ecrp_fund_amount,iarp_allow_amount ,di_trans_facility_amount ,di_free_accomodation_amount ,other_amount ,other_comment
        });
    }

    useEffect(()=>{
        const clientId = client._id;
        GetSalary({token, "clientId":clientId}).then((data) => {
            console.log("use State" , data);
            setBasicPayAmount(data.basic_pay.amount);
            setSpecialPayAmount(data.special_pay.amount);
            setArrearPayAmount(data.arrear_pay.amount);
            setDearnessAllowanceAmount(data.dear_allow.amount);
            setHouseRentAllowanceAmount(data.house_rent_allow.amount);
            setMedicalAllowanceAmount(data.medi_allow.amount); 
            setConveyanceAllowanceAmount(data.conveyance_allow.amount); 
            setFestivalAllowanceAmount (data.festival_allow.amount);   
            setSupportStaffAllowanceAmount(data.support_staff_allow.amount);
            setLeaveAllowanceAmount(data.leave_allow.amount);    
            setHonourRewardFeeAmount (data.honour_reward_fee.amount);   
            setOvertimeAllowanceAmount(data.overtime_allow.amount);    
            setBonusAmount(data.bonus_ex_gracia.amount);    
            setOtherAllowanceAmount(data.other_allow.amount);    
            setGratuatyAmount(data.gratuaty.amount);    
            setWorkersPartFundAmount(data.workers_part_fund.amount);    
            setEcrpFundAmount(data.ecrp_fund.amount);    
            setIarpFundAmount (data.iarp_allow.amount);   
            setDeemIncTransportAmount(data.di_trans_facility.amount);    
            setDeemIncFreeAmount(data.di_free_accomodation.amount);    
            setOtherAmount (data.other.amount);             
            setOtherComment(data.other_comment);
            setTotalTaxable(data.total_taxable);
        })
    },[]);



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
                labelText='Basic Pay'
                hoverText="the amount of money that an employee receives prior to any extras being added or payments deducted"
            />
            

            <FormRow
                type='number'
                name='special_pay_amount'
                value={special_pay_amount}
                handleChange={(e) => setSpecialPayAmount(e.target.value)}
                labelText='Special Pay '
                hoverText=''
                
            />
            

            
            <FormRow
                type='number'
                name='arrear_pay_amount'
                value={arrear_pay_amount}
                handleChange={(e) => setArrearPayAmount(e.target.value)}
                labelText='Arrear Pay '
                hoverText='any portion of Property Taxes that remain unpaid after the date on which they are due.'
            />
           
            
            
            <FormRow
                type='number'
                name='dear_allow_amount'
                value={dear_allow_amount}
                handleChange={(e) => setDearnessAllowanceAmount(e.target.value)}
                labelText='Dearness Allowance '
                hoverText='the cost-of-living adjustment allowance which the government pays to the employees of the public sector as well as pensioners of the same'
            />
           
            
            
            <FormRow
                type='number'
                name='house_rent_allow_amount'
                value={house_rent_allow_amount}
                handleChange={(e) => setHouseRentAllowanceAmount(e.target.value)}
                labelText='House Rent Allowance '
                hoverText=''
            />
           
            
            
            <FormRow
                type='number'
                name='medi_allow_amount'
                value={medi_allow_amount}
                handleChange={(e) => setMedicalAllowanceAmount(e.target.value)}
                labelText='Medical Allowance '
                hoverText=''
            />
            
            
            
            <FormRow
                type='number'
                name='conveyance_allow_amount'
                value={conveyance_allow_amount}
                handleChange={(e) => setConveyanceAllowanceAmount(e.target.value)}
                labelText='Conveyance Allowance '
                hoverText=''
            />
           
            
            
            <FormRow
                type='number'
                name='festival_allow_amount'
                value={festival_allow_amount}
                handleChange={(e) => setFestivalAllowanceAmount(e.target.value)}
                labelText='Festival Allowance '
                hoverText=''
            />
           
            
            
            <FormRow
                type='number'
                name='support_staff_allow_amount'
                value={support_staff_allow_amount}
                handleChange={(e) => setSupportStaffAllowanceAmount(e.target.value)}
                labelText='Allowance for support staff '
                hoverText=''
            />
            
            
            
            <FormRow
                type='number'
                name='leave_allow_amount'
                value={leave_allow_amount}
                handleChange={(e) => setLeaveAllowanceAmount(e.target.value)}
                labelText='Leave Allowance '
                hoverText=''
            />

           
            
            
            <FormRow
                type='number'
                name='honour_reward_fee_amount'
                value={honour_reward_fee_amount}
                handleChange={(e) => setHonourRewardFeeAmount(e.target.value)}
                labelText='Honorarium/ Reward/Fee '
                hoverText=''
            />
            
            
            
            <FormRow
                type='number'
                name='overtime_allow_amount'
                value={overtime_allow_amount}
                handleChange={(e) => setOvertimeAllowanceAmount(e.target.value)}
                labelText='Overtime Allowance '
                hoverText=''
            />
           
            
            
            <FormRow
                type='number'
                name='bonus_ex_gracia_amount'
                value={bonus_ex_gracia_amount}
                handleChange={(e) => setBonusAmount(e.target.value)}
                labelText='Bonus / Ex-gratia '
                hoverText=''
            />
           
            
            
            <FormRow
                type='number'
                name='other_allow_amount'
                value={other_allow_amount}
                handleChange={(e) => setOtherAllowanceAmount(e.target.value)}
                labelText='Other Allowance '
                hoverText=''
            />
            
            
            
            <FormRow
                type='number'
                name='gratuaty_amount'
                value={gratuaty_amount}
                handleChange={(e) => setGratuatyAmount(e.target.value)}
                labelText='Gratuaty '
                hoverText=''
            />
            
            
            
            <FormRow
                type='number'
                name='workers_part_fund_amount'
                value={workers_part_fund_amount}
                handleChange={(e) => setWorkersPartFundAmount(e.target.value)}
                labelText='Workers Participation Fund '
                hoverText=''
            />
            
            
            
            <FormRow
                type='number'
                name='ecrp_fund_amount'
                value={ecrp_fund_amount}
                handleChange={(e) => setEcrpFundAmount(e.target.value)}
                labelText='Employer’s contribution to a recognized provident fund '
                hoverText=''
            />
           
            
            
            <FormRow
                type='number'
                name='iarp_allow_amount'
                value={iarp_allow_amount}
                handleChange={(e) => setIarpFundAmount(e.target.value)}
                labelText='Interest accrued on a recognized provident fund '
                hoverText=''
            />
            
            
            
            <FormRow
                type='number'
                name='di_trans_facility_amount'
                value={di_trans_facility_amount}
                handleChange={(e) => setDeemIncTransportAmount(e.target.value)}
                labelText='Deemed income for transport facility '
                hoverText=''
            />
           
            
            
            <FormRow
                type='number'
                name='di_free_accomodation_amount'
                value={di_free_accomodation_amount}
                handleChange={(e) => setDeemIncFreeAmount(e.target.value)}
                labelText='Deemed income for free furnished/unfurnished accommodation '
                hoverText=''
            />
            
            
            
            <FormRow
                type='number'
                name='other_amount'
                value={other_amount}
                handleChange={(e) => setOtherAmount(e.target.value)}
                labelText='Other '
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