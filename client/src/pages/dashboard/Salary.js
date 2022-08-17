import { useState } from 'react'
import {FormRow,Alert, FormRowSelect} from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'


const initialState = {

}


const Salary = () => {
    const [values, setValues] = useState(initialState);
    const { salary,  showAlert, displayAlert, updateSalary , isLoading, handleChange } = useAppContext();

    const [basic_pay_amount , setBasicPayAmount] = useState(salary?.basic_pay_amount);
    const [basic_pay_taxable , setBasicPayTaxable] = useState(salary?.basic_pay_taxable);
    const [special_pay_amount , setSpecialPayAmount] = useState(salary?.special_pay_amount);
    const [special_pay_taxable , setSpecialPayTaxable] = useState(salary?.special_pay_taxable);
    const [arrear_pay_amount , setArrearPayAmount] = useState(salary?.arrear_pay_amount);
    const [arrear_pay_taxable , setArrearPayTaxable] = useState(salary?.arrear_pay_taxable);
    const [dear_allow_amount , setDearnessAllowanceAmount] = useState(salary?.dear_allow_amount);    
    const [dear_allow_taxable , setDearnessAllowanceTaxable] = useState(salary?.dear_allow_taxable);
    const [house_rent_allow_amount , setHouseRentAllowanceAmount] = useState(salary?.house_rent_allow_amount);    
    const [house_rent_allow_taxable , setHouseRentAllowanceTaxable] = useState(salary?.house_rent_allow_taxable);
    const [medi_allow_amount , setMedicalAllowanceAmount] = useState(salary?.medi_allow_amount);    
    const [medi_allow_taxable , setMedicalAllowanceTaxable] = useState(salary?.medi_allow_taxable);
    const [conveyance_allow_amount , setConveyanceAllowanceAmount] = useState(salary?.conveyance_allow_amount);    
    const [conveyance_allow_taxable , setConveyanceAllowanceTaxable] = useState(salary?.conveyance_allow_taxable);
    const [festival_allow_amount , setFestivalAllowanceAmount] = useState(salary?.festival_allow_amount);    
    const [festival_allow_taxable , setFestivalAllowanceTaxable] = useState(salary?.festival_allow_taxable);
    const [support_staff_allow_amount , setSupportStaffAllowanceAmount] = useState(salary?.support_staff_allow_amount);
    const [support_staff_allow_taxable , setSupportStaffAllowanceTaxable] = useState(salary?.support_staff_allow_taxable);
    const [leave_allow_amount , setLeaveAllowanceAmount] = useState(salary?.leave_allow_amount);    
    const [leave_allow_taxable , setLeaveAllowanceTaxable] = useState(salary?.leave_allow_taxable);
    const [honour_reward_fee_amount , setHonourRewardFeeAmount] = useState(salary?.honour_reward_fee_amount);    
    const [honour_reward_fee_taxable , setHonourRewardFeeTaxable] = useState(salary?.honour_reward_fee_taxable);
    const [overtime_allow_amount , setOvertimeAllowanceAmount] = useState(salary?.overtime_allow_amount);    
    const [overtime_allow_taxable , setOvertimeAllowanceTaxable] = useState(salary?.overtime_allow_taxable);
    const [bonus_ex_gracia_amount , setBonusAmount] = useState(salary?.bonus_ex_gracia_amount);    
    const [bonus_ex_gracia_taxable , setBonusTaxable] = useState(salary?.bonus_ex_gracia_taxable);
    const [other_allow_amount , setOtherAllowanceAmount] = useState(salary?.other_allow_amount);    
    const [other_allow_taxable , setOtherAllowanceTaxable] = useState(salary?.other_allow_taxable);
    const [gratuaty_amount , setGratuatyAmount] = useState(salary?.gratuaty_amount);    
    const [gratuaty_taxable , setGratuatyTaxable] = useState(salary?.gratuaty_taxable);
    const [workers_part_fund_amount , setWorkersPartFundAmount] = useState(salary?.workers_part_fund_amount);    
    const [workers_part_fund_taxable , setWorkersPartFundTaxable] = useState(salary?.workers_part_fund_taxable);
    const [ecrp_fund_amount , setEcrpFundAmount] = useState(salary?.ecrp_fund_amount);    
    const [ecrp_fund_taxable , setEcrpFundTaxable] = useState(salary?.ecrp_fund_taxable);
    const [iarp_allow_amount , setIarpFundAmount] = useState(salary?.iarp_allow_amount);    
    const [iarp_allow_taxable , setIarpFundTaxable] = useState(salary?.iarp_allow_taxable);
    const [di_trans_facility_amount , setDeemIncTransportAmount] = useState(salary?.di_trans_facility_amount);    
    const [di_trans_facility_taxable , setDeemIncTransportTaxable] = useState(salary?.di_trans_facility_taxable);
    const [di_free_accomodation_amount , setDeemIncFreeAmount] = useState(salary?.di_free_accomodation_amount);    
    const [di_free_accomodation_taxable , setDeemIncFreeTaxable] = useState(salary?.di_free_accomodation_taxable);
    const [other_amount , setOtherAmount] = useState(salary?.other_amount);    
    const [other_taxable , setOtherTaxable] = useState(salary?.other_taxable);
    const [other_comment , setOtherComment] = useState(salary?.other_comment);

    const handleSubmit = (e) => {
        console.log(other_comment);
        e.preventDefault();
        if(!basic_pay_amount || !special_pay_amount || !arrear_pay_amount || !dear_allow_amount || !house_rent_allow_amount || !medi_allow_amount || !conveyance_allow_amount || !festival_allow_amount || !support_staff_allow_amount || !leave_allow_amount || !honour_reward_fee_amount || !overtime_allow_amount || !bonus_ex_gracia_amount || !other_allow_amount || !gratuaty_amount || !workers_part_fund_amount || !ecrp_fund_amount || !iarp_allow_amount || !di_trans_facility_amount || !di_free_accomodation_amount || !other_amount || !other_comment || 
            !basic_pay_taxable || !special_pay_taxable || !arrear_pay_taxable || !dear_allow_taxable || !house_rent_allow_taxable || !medi_allow_taxable || !conveyance_allow_taxable || !festival_allow_taxable || !support_staff_allow_taxable || !leave_allow_taxable || !honour_reward_fee_taxable || !overtime_allow_taxable || !bonus_ex_gracia_taxable || !other_allow_taxable || !gratuaty_taxable || !workers_part_fund_taxable || !ecrp_fund_taxable || !iarp_allow_taxable || !di_trans_facility_taxable || !di_free_accomodation_taxable || !other_taxable
            ) {
          displayAlert();
          return;  
        }
    
        updateSalary({ basic_pay_amount ,basic_pay_taxable,special_pay_amount ,special_pay_taxable,arrear_pay_amount,arrear_pay_taxable ,dear_allow_amount,dear_allow_taxable ,
            house_rent_allow_amount,house_rent_allow_taxable ,medi_allow_amount,medi_allow_taxable ,conveyance_allow_amount,conveyance_allow_taxable ,festival_allow_amount,festival_allow_taxable ,support_staff_allow_amount ,support_staff_allow_taxable,leave_allow_amount ,leave_allow_taxable,honour_reward_fee_amount ,honour_reward_fee_taxable,overtime_allow_amount,overtime_allow_taxable,bonus_ex_gracia_amount ,bonus_ex_gracia_taxable,other_allow_amount ,other_allow_taxable,gratuaty_amount ,gratuaty_taxable,workers_part_fund_amount ,workers_part_fund_taxable,ecrp_fund_amount,ecrp_fund_taxable,iarp_allow_amount ,iarp_allow_taxable,di_trans_facility_amount ,di_trans_facility_taxable,di_free_accomodation_amount ,di_free_accomodation_taxable,other_amount,other_taxable ,other_comment
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
        <form className='form' onSubmit={handleSubmit}>
            <h3>HouseProperty </h3>
            {showAlert && <Alert />}

            {/* name */}
            <div className='form-center'>
            <FormRow
                type='number'
                name='basic_pay_amount'
                value={basic_pay_amount}
                handleChange={(e) => setBasicPayAmount(e.target.value)}
                labelText='Basic Pay(amount)'
            />
            <FormRow
                type='number'
                name='basic_pay_taxable'
                value={basic_pay_taxable}
                handleChange={(e) => setBasicPayTaxable(e.target.value)}
                labelText='Basic Pay(taxable)'
            />

            <FormRow
                type='number'
                name='special_pay_amount'
                value={special_pay_amount}
                handleChange={(e) => setSpecialPayAmount(e.target.value)}
                labelText='Special Pay(amount)'
            />
            <FormRow
                type='number'
                name='special_pay_taxable'
                value={special_pay_taxable}
                handleChange={(e) => setSpecialPayTaxable(e.target.value)}
                labelText='Special Pay(taxable)'
            />

            
            <FormRow
                type='number'
                name='arrear_pay_amount'
                value={arrear_pay_amount}
                handleChange={(e) => setArrearPayAmount(e.target.value)}
                labelText='Arrear Pay(amount)'
            />
            <FormRow
                type='number'
                name='arrear_pay_taxable'
                value={arrear_pay_taxable}
                handleChange={(e) => setArrearPayTaxable(e.target.value)}
                labelText='Arrear Pay(taxable)'
            />
            
            
            <FormRow
                type='number'
                name='dear_allow_amount'
                value={dear_allow_amount}
                handleChange={(e) => setDearnessAllowanceAmount(e.target.value)}
                labelText='Dearness Allowance(amount)'
            />
            <FormRow
                type='number'
                name='dear_allow_taxable'
                value={dear_allow_taxable}
                handleChange={(e) => setDearnessAllowanceTaxable(e.target.value)}
                labelText='Dearness Allowance(taxable)'
            />
            
            
            <FormRow
                type='number'
                name='house_rent_allow_amount'
                value={house_rent_allow_amount}
                handleChange={(e) => setHouseRentAllowanceAmount(e.target.value)}
                labelText='House Rent Allowance(amount)'
            />
            <FormRow
                type='number'
                name='house_rent_allow_taxable'
                value={house_rent_allow_taxable}
                handleChange={(e) => setHouseRentAllowanceTaxable(e.target.value)}
                labelText='House Rent Allowance(taxable)'
            />
            
            
            <FormRow
                type='number'
                name='medi_allow_amount'
                value={medi_allow_amount}
                handleChange={(e) => setMedicalAllowanceAmount(e.target.value)}
                labelText='Medical Allowance(amount)'
            />
            <FormRow
                type='number'
                name='medi_allow_taxable'
                value={medi_allow_taxable}
                handleChange={(e) => setMedicalAllowanceTaxable(e.target.value)}
                labelText='Medical Allowance(taxable)'
            />
            
            
            <FormRow
                type='number'
                name='conveyance_allow_amount'
                value={conveyance_allow_amount}
                handleChange={(e) => setConveyanceAllowanceAmount(e.target.value)}
                labelText='Conveyance Allowance(amount)'
            />
            <FormRow
                type='number'
                name='conveyance_allow_taxable'
                value={conveyance_allow_taxable}
                handleChange={(e) => setConveyanceAllowanceTaxable(e.target.value)}
                labelText='Conveyance Allowance(taxable)'
            />
            
            
            <FormRow
                type='number'
                name='festival_allow_amount'
                value={festival_allow_amount}
                handleChange={(e) => setFestivalAllowanceAmount(e.target.value)}
                labelText='Festival Allowance(amount)'
            />
            <FormRow
                type='number'
                name='festival_allow_taxable'
                value={festival_allow_taxable}
                handleChange={(e) => setFestivalAllowanceTaxable(e.target.value)}
                labelText='Festival Allowance(taxable)'
            />
            
            
            <FormRow
                type='number'
                name='support_staff_allow_amount'
                value={support_staff_allow_amount}
                handleChange={(e) => setSupportStaffAllowanceAmount(e.target.value)}
                labelText='Allowance for support staff(amount)'
            />
            <FormRow
                type='number'
                name='support_staff_allow_taxable'
                value={support_staff_allow_taxable}
                handleChange={(e) => setSupportStaffAllowanceTaxable(e.target.value)}
                labelText='Allowance for support staff(taxable)'
            />
            
            
            <FormRow
                type='number'
                name='leave_allow_amount'
                value={leave_allow_amount}
                handleChange={(e) => setLeaveAllowanceAmount(e.target.value)}
                labelText='Leave Allowance(amount)'
            />

            <FormRow
                type='number'
                name='leave_allow_taxable'
                value={leave_allow_taxable}
                handleChange={(e) => setLeaveAllowanceTaxable(e.target.value)}
                labelText='Leave Allowance(taxable)'
            />
            
            
            <FormRow
                type='number'
                name='honour_reward_fee_amount'
                value={honour_reward_fee_amount}
                handleChange={(e) => setHonourRewardFeeAmount(e.target.value)}
                labelText='Honorarium/ Reward/Fee(amount)'
            />
            <FormRow
                type='number'
                name='honour_reward_fee_taxable'
                value={honour_reward_fee_taxable}
                handleChange={(e) => setHonourRewardFeeTaxable(e.target.value)}
                labelText='Honorarium/ Reward/Fee(taxable)'
            />
            
            
            <FormRow
                type='number'
                name='overtime_allow_amount'
                value={overtime_allow_amount}
                handleChange={(e) => setOvertimeAllowanceAmount(e.target.value)}
                labelText='Overtime Allowance(amount)'
            />
            <FormRow
                type='number'
                name='overtime_allow_taxable'
                value={overtime_allow_taxable}
                handleChange={(e) => setOvertimeAllowanceTaxable(e.target.value)}
                labelText='Overtime Allowance(taxable)'
            />
            
            
            <FormRow
                type='number'
                name='bonus_ex_gracia_amount'
                value={bonus_ex_gracia_amount}
                handleChange={(e) => setBonusAmount(e.target.value)}
                labelText='Bonus / Ex-gratia(amount)'
            />
            <FormRow
                type='number'
                name='bonus_ex_gracia_taxable'
                value={bonus_ex_gracia_taxable}
                handleChange={(e) => setBonusTaxable(e.target.value)}
                labelText='Bonus / Ex-gratia(taxable)'
            />
            
            
            <FormRow
                type='number'
                name='other_allow_amount'
                value={other_allow_amount}
                handleChange={(e) => setOtherAllowanceAmount(e.target.value)}
                labelText='Other Allowance(amount)'
            />
            <FormRow
                type='number'
                name='other_allow_taxable'
                value={other_allow_taxable}
                handleChange={(e) => setOtherAllowanceTaxable(e.target.value)}
                labelText='Other Allowance(taxable)'
            />
            
            
            <FormRow
                type='number'
                name='gratuaty_amount'
                value={gratuaty_amount}
                handleChange={(e) => setGratuatyAmount(e.target.value)}
                labelText='Gratuaty(amount)'
            />
            <FormRow
                type='number'
                name='gratuaty_taxable'
                value={gratuaty_taxable}
                handleChange={(e) => setGratuatyTaxable(e.target.value)}
                labelText='Gratuaty(taxable)'
            />
            
            
            <FormRow
                type='number'
                name='workers_part_fund_amount'
                value={workers_part_fund_amount}
                handleChange={(e) => setWorkersPartFundAmount(e.target.value)}
                labelText='Workers Participation Fund(amount)'
            />
            <FormRow
                type='number'
                name='workers_part_fund_taxable'
                value={workers_part_fund_taxable}
                handleChange={(e) => setWorkersPartFundTaxable(e.target.value)}
                labelText='Workers Participation Fund(taxable)'
            />
            
            
            <FormRow
                type='number'
                name='ecrp_fund_amount'
                value={ecrp_fund_amount}
                handleChange={(e) => setEcrpFundAmount(e.target.value)}
                labelText='Employer’s contribution to a recognized provident fund(amount)'
            />
            <FormRow
                type='number'
                name='ecrp_fund_taxable'
                value={ecrp_fund_taxable}
                handleChange={(e) => setEcrpFundTaxable(e.target.value)}
                labelText='Employer’s contribution to a recognized provident fund(taxable)'
            />
            
            
            <FormRow
                type='number'
                name='iarp_allow_amount'
                value={iarp_allow_amount}
                handleChange={(e) => setIarpFundAmount(e.target.value)}
                labelText='Interest accrued on a recognized provident fund(amount)'
            />
            <FormRow
                type='number'
                name='iarp_allow_taxable'
                value={iarp_allow_taxable}
                handleChange={(e) => setIarpFundTaxable(e.target.value)}
                labelText='Interest accrued on a recognized provident fund(taxable)'
            />
            
            
            <FormRow
                type='number'
                name='di_trans_facility_amount'
                value={di_trans_facility_amount}
                handleChange={(e) => setDeemIncTransportAmount(e.target.value)}
                labelText='Deemed income for transport facility(amount)'
            />
            <FormRow
                type='number'
                name='di_trans_facility_taxable'
                value={di_trans_facility_taxable}
                handleChange={(e) => setDeemIncTransportTaxable(e.target.value)}
                labelText='Deemed income for transport facility(taxable)'
            />
            
            
            <FormRow
                type='number'
                name='di_free_accomodation_amount'
                value={di_free_accomodation_amount}
                handleChange={(e) => setDeemIncFreeAmount(e.target.value)}
                labelText='Deemed income for free furnished/unfurnished accommodation(amount)'
            />
            <FormRow
                type='number'
                name='di_free_accomodation_taxable'
                value={di_free_accomodation_taxable}
                handleChange={(e) => setDeemIncFreeTaxable(e.target.value)}
                labelText='Deemed income for free furnished/unfurnished accommodation(taxable)'
            />
            
            
            <FormRow
                type='number'
                name='other_amount'
                value={other_amount}
                handleChange={(e) => setOtherAmount(e.target.value)}
                labelText='Other(amount)'
            />
            <FormRow
                type='number'
                name='other_taxable'
                value={other_taxable}
                handleChange={(e) => setOtherTaxable(e.target.value)}
                labelText='Other(taxable)'
            />

            <FormRow
                type='text'
                name='other_comment'
                value={other_comment}
                handleChange={(e) => setOtherComment(e.target.value)}
                labelText='Other comment'
            />
            



            <button className='btn btn-block' type='submit' disabled={isLoading}>
                {isLoading ? 'Please Wait...' : 'save changes'}
            </button>
            </div>
        </form>
    </Wrapper>
    )
}
export default Salary;