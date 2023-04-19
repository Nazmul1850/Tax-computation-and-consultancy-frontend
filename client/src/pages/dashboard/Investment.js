import { useState } from 'react'
import { FormRow,Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const initialState = {}


const Investment = () => {
    const [values, setValues] = useState(initialState);
    const { investment,  showAlert, displayAlert, updateInvestment , isLoading, handleChange } = useAppContext();

    const [life_insurance_premium , setLifeInsurance] = useState(investment?.life_insurance_premium);
    const [pension_scheme , setPension] = useState(investment?.pension_scheme);
    const [sevings_certificate , setSevingsCertificate] = useState(investment?.sevings_certificate);
    const [debenture_stock_share , setDebenture] = useState(investment?.debenture_stock_share);
    const [provident_fund , setProvidentFund] = useState(investment?.provident_fund);
    const [self_emp_prov_fund , setSelfEmpProvFund] = useState(investment?.self_emp_prov_fund);
    const [super_annuation_fund , setSuperAnnuationFund] = useState(investment?.super_annuation_fund);
    const [ben_fund_gi_premimum , setBenFundGiPremimum] = useState(investment?.ben_fund_gi_premimum);
    const [zakat_fund , setZakatFund] = useState(investment?.zakat_fund);
    const [others , setOthers] = useState(investment?.others);
    const [others_comment , setOtherComment] = useState(investment?.others_comment);
    const [tax_rebate , setTaxRebate] = useState(investment?.totoal_allow_invest);


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!life_insurance_premium || !pension_scheme || !sevings_certificate ) {
          displayAlert();
          return;  
        }
    
        updateInvestment({ life_insurance_premium, pension_scheme, sevings_certificate, debenture_stock_share, provident_fund, self_emp_prov_fund, super_annuation_fund, ben_fund_gi_premimum, zakat_fund, others,  others_comment, tax_rebate });
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
            <h3>Investment </h3>
            {showAlert && <Alert />}

            {/* name */}
            <div className='form-center'>
            <FormRow
                type='number'
                name='life_insurance_premium'
                value={life_insurance_premium}
                handleChange={(e) => setLifeInsurance(e.target.value)}
                labelText='Life insurance premium'
                hoverText=''
            />
            <FormRow
                type='number'
                name='pension_scheme'
                value={pension_scheme}
                handleChange={(e) => setPension(e.target.value)}
                labelText='Contribution to deposit pension scheme'
                hoverText=''
            />
            <FormRow
                type='number'
                name='sevings_certificate'
                value={sevings_certificate}
                handleChange={(e) => setSevingsCertificate(e.target.value)}
                labelText='Investment in approved savings certificate'
                hoverText=''
            />
            <FormRow                
                type='number'
                name='debenture_stock_share'
                value={debenture_stock_share}
                handleChange={(e) => setDebenture(e.target.value)}
                labelText='Investment in approved debenture or debenture stock, Stock or Shares'
                hoverText=''
                
            />
            <FormRow
                type='number'
                name='provident_fund'
                value={provident_fund}
                handleChange={(e) => setProvidentFund(e.target.value)}
                labelText='Contribution to provident fund to which Provident Fund Act, 1925 applies'
                hoverText=''
            />
            <FormRow
                type='number'
                name='self_emp_prov_fund'
                value={self_emp_prov_fund}
                handleChange={(e) => setSelfEmpProvFund(e.target.value)}
                labelText='Self contribution and employer’s contribution to Recognized Provident Fund'
                hoverText=''
            />
            <FormRow
                type='number'
                name='super_annuation_fund'
                value={super_annuation_fund}
                handleChange={(e) => setSuperAnnuationFund(e.target.value)}
                labelText='Contribution to Super Annuation Fund'
                hoverText=''
            />
            <FormRow
                type='number'
                name='ben_fund_gi_premimum'
                value={ben_fund_gi_premimum}
                handleChange={(e) => setBenFundGiPremimum(e.target.value)}
                labelText='Contribution to Benevolent Fund and Group Insurance Premium'
                hoverText=''
            />
            <FormRow
                type='number'
                name='zakat_fund'
                value={zakat_fund}
                handleChange={(e) => setZakatFund(e.target.value)}
                labelText='Contribution to Zakat Fund'
                hoverText=''
            />
            <FormRow
                type='number'
                name='others'
                value={others}
                handleChange={(e) => setOthers(e.target.value)}
                labelText='Others'
                hoverText=''
            />
            <FormRow
                labelText='Any comment'
                type='text'
                name='others_comment'
                value={others_comment}
                handleChange={(e) => setOtherComment(e.target.value)}
                hoverText=''
                
            />
            <FormRow
                labelText='Liabilities'
                type='number'
                name='tax_rebate'
                value={tax_rebate}
                handleChange={(e) => setTaxRebate(e.target.value)}
                hoverText=''
            />
            <button className='btn btn-block' type='submit' disabled={isLoading}>
                {isLoading ? 'Please Wait...' : 'save changes'}
            </button>
            </div>
        </form>
    </Wrapper>
    )
}
export default Investment;