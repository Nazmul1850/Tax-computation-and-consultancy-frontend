
import { useEffect, useState } from 'react'
import { FormRow,Alert } from '../components'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import getInvestment from '../apis/getInvestment'


const Investment = ({clientId}) => {

    const { token, client, showAlert, displayAlert, updateInvestment , isLoading, handleChange } = useAppContext();

    const [life_insurance_premium , setLifeInsurance] = useState(0);
    const [pension_scheme , setPension] = useState(0);
    const [sevings_certificate , setSevingsCertificate] = useState(0);
    const [debenture_stock_share , setDebenture] = useState(0);
    const [provident_fund , setProvidentFund] = useState(0);
    const [self_emp_prov_fund , setSelfEmpProvFund] = useState(0);
    const [super_annuation_fund , setSuperAnnuationFund] = useState(0);
    const [ben_fund_gi_premimum , setBenFundGiPremimum] = useState(0);
    const [zakat_fund , setZakatFund] = useState(0);
    const [others , setOthers] = useState(0);
    const [others_comment , setOtherComment] = useState('');
    const [tax_rebate , setTaxRebate] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!life_insurance_premium || !pension_scheme || !sevings_certificate ) {
          displayAlert();
          return;  
        }
    
        updateInvestment({ clientId, life_insurance_premium, pension_scheme, sevings_certificate, debenture_stock_share, provident_fund, self_emp_prov_fund, super_annuation_fund, ben_fund_gi_premimum, zakat_fund, others,  others_comment, tax_rebate });
    }

    useEffect(()=>{
        const clientId = client._id;
        getInvestment({token, "clientId":clientId}).then((data) => {
            console.log("use State" , data);
            setLifeInsurance(data.life_insurance_premium);
            setPension(data.pension_scheme);
            setSevingsCertificate(data.sevings_certificate);
            setDebenture(data.debenture_stock_share);
            setProvidentFund(data.provident_fund);
            setSelfEmpProvFund(data.self_emp_prov_fund); 
            setSuperAnnuationFund(data.super_annuation_fund); 
            setBenFundGiPremimum (data.ben_fund_gi_premimum);   
            setZakatFund(data.zakat_fund);
            setOthers(data.others);    
            setOtherComment (data.other_comment);   
            setTaxRebate(data.tax_rebate);    
            
        })
    },[]);

    return (
        <Wrapper>
            <h1>Investment </h1>
        <form className='form' onSubmit={handleSubmit}>
            
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