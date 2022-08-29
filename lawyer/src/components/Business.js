import { useEffect, useState } from 'react'
import { FormRow,Alert } from '../components'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import getBusiness from '../apis/getBusiness'

const Business = ({clientId}) =>{
    const { token, client, showAlert, displayAlert, updateBusiness , isLoading, handleChange } = useAppContext();

    const [name , setName] = useState('');
    const [address , setAddress] = useState('');
    const [sales_turnover , setSalesTurnOver] = useState(0);
    const [gross_profit , setGrossProfit] = useState(0);
    const [gen_admin_sel_other_expense , setGeneralAdminSell] = useState(0);
    const [cash_hand_bank , setCashInHandnBank] = useState(0);
    const [inventories , setInventories] = useState(0);
    const [fixed_assets , setFixedAssets] = useState(0);
    const [other_assets , setOtherAssets] = useState(0);
    const [opening_capital , setOpeningCapital] = useState(0);
    const [withdraw_income_year , setWithDraw] = useState(0);
    const [liabilities , setLiabilities] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !address || !sales_turnover || !gross_profit || !gen_admin_sel_other_expense || !cash_hand_bank || !inventories || !fixed_assets || !other_assets || !opening_capital || !withdraw_income_year || !liabilities) {
          displayAlert();
          return;  
        }
    
        updateBusiness({ clientId, name, address, sales_turnover, gross_profit, gen_admin_sel_other_expense, cash_hand_bank, inventories, fixed_assets, other_assets, opening_capital,  withdraw_income_year, liabilities });
    }

    useEffect(()=>{
        const clientId = client._id;
        getBusiness({token, "clientId":clientId}).then((data) => {
            console.log("use State" , data);
            setName(data.name);
            setAddress(data.address);
            setSalesTurnOver(data.sales_turnover);
            setGrossProfit(data.gross_profit);
            setGeneralAdminSell(data.gen_admin_sel_other_expense);
            setCashInHandnBank(data.cash_hand_bank); 
            setInventories(data.inventories); 
            setFixedAssets (data.fixed_assets);   
            setOtherAssets(data.other_assets);
            setOpeningCapital(data.opening_capital);    
            setWithDraw (data.withdraw_income_year);   
            setLiabilities(data.liabilities);    
            
        })
    },[]);

    return (
        <Wrapper>
        <form className='form' onSubmit={handleSubmit}>
            <h3>Business </h3>
            {showAlert && <Alert />}

            {/* name */}
            <div className='form-center'>
            <FormRow
                type='text'
                name='name'
                value={name}
                handleChange={(e) => setName(e.target.value)}
                labelText='Business or Profession'
                hoverText=''
            />
            <FormRow
                type='text'
                name='address'
                value={address}
                handleChange={(e) => setAddress(e.target.value)}
                labelText='Address'
                hoverText=''
            />
            <FormRow
                type='number'
                name='sales_turnover'
                value={sales_turnover}
                handleChange={(e) => setSalesTurnOver(e.target.value)}
                labelText='Sales/ Turnover/ Receipts'
                hoverText=''
            />
            <FormRow                
                type='number'
                name='gross_profit'
                value={gross_profit}
                handleChange={(e) => setGrossProfit(e.target.value)}
                labelText='Gross Profit'
                hoverText=''
                
            />
            <FormRow
                type='number'
                name='gen_admin_sel_other_expense'
                value={gen_admin_sel_other_expense}
                handleChange={(e) => setGeneralAdminSell(e.target.value)}
                labelText='General, administrative, selling and other expenses'
                hoverText=''
            />
            <FormRow
                type='number'
                name='cash_hand_bank'
                value={cash_hand_bank}
                handleChange={(e) => setCashInHandnBank(e.target.value)}
                labelText='Cash in hand & at bank'
                hoverText=''
            />
            <FormRow
                type='number'
                name='inventories'
                value={inventories}
                handleChange={(e) => setInventories(e.target.value)}
                labelText='Inventories'
                hoverText=''
            />
            <FormRow
                type='number'
                name='fixed_assets'
                value={fixed_assets}
                handleChange={(e) => setFixedAssets(e.target.value)}
                labelText='Fixed Assets'
                hoverText=''
            />
            <FormRow
                type='number'
                name='other_assets'
                value={other_assets}
                handleChange={(e) => setOtherAssets(e.target.value)}
                labelText='Other Assets'
                hoverText=''
            />
            <FormRow
                type='number'
                name='opening_capital'
                value={opening_capital}
                handleChange={(e) => setOpeningCapital(e.target.value)}
                labelText='Opening capital'
                hoverText=''
            />
            <FormRow
                labelText='Withdrawals in the income year'
                type='number'
                name='withdraw_income_year'
                value={withdraw_income_year}
                handleChange={(e) => setWithDraw(e.target.value)}
                hoverText=''
                
            />
            <FormRow
                labelText='Liabilities'
                type='number'
                name='liabilities'
                value={liabilities}
                handleChange={(e) => setLiabilities(e.target.value)}
            />
            <button className='btn btn-block' type='submit' disabled={isLoading}>
                {isLoading ? 'Please Wait...' : 'save changes'}
            </button>
            </div>
        </form>
    </Wrapper>
    )

};

export default Business;