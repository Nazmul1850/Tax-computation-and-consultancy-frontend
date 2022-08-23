import { useState } from 'react'
import { FormRow,Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const initialState = {}

const Business = () => {
    const [values, setValues] = useState(initialState);
    const { business,  showAlert, displayAlert, updateBusiness , isLoading, handleChange } = useAppContext();

    const [name , setName] = useState(business?.name);
    const [address , setAddress] = useState(business?.address);
    const [sales_turnover , setSalesTurnOver] = useState(business?.sales_turnover);
    const [gross_profit , setGrossProfit] = useState(business?.gross_profit);
    const [gen_admin_sel_other_expense , setGeneralAdminSell] = useState(business?.gen_admin_sel_other_expense);
    const [cash_hand_bank , setCashInHandnBank] = useState(business?.cash_hand_bank);
    const [inventories , setInventories] = useState(business?.inventories);
    const [fixed_assets , setFixedAssets] = useState(business?.fixed_assets);
    const [other_assets , setOtherAssets] = useState(business?.other_assets);
    const [opening_capital , setOpeningCapital] = useState(business?.opening_capital);
    const [withdraw_income_year , setWithDraw] = useState(business?.withdraw_income_year);
    const [liabilities , setLiabilities] = useState(business?.liabilities);


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !address || !sales_turnover || !gross_profit || !gen_admin_sel_other_expense || !cash_hand_bank || !inventories || !fixed_assets || !other_assets || !opening_capital || !withdraw_income_year || !liabilities) {
          displayAlert();
          return;  
        }
    
        updateBusiness({ name, address, sales_turnover, gross_profit, gen_admin_sel_other_expense, cash_hand_bank, inventories, fixed_assets, other_assets, opening_capital,  withdraw_income_year, liabilities });
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
            />
            <FormRow
                type='text'
                name='address'
                value={address}
                handleChange={(e) => setAddress(e.target.value)}
                labelText='Address'
            />
            <FormRow
                type='number'
                name='sales_turnover'
                value={sales_turnover}
                handleChange={(e) => setSalesTurnOver(e.target.value)}
                labelText='Sales/ Turnover/ Receipts'
            />
            <FormRow                
                type='number'
                name='gross_profit'
                value={gross_profit}
                handleChange={(e) => setGrossProfit(e.target.value)}
                labelText='Gross Profit'
                
            />
            <FormRow
                type='number'
                name='gen_admin_sel_other_expense'
                value={gen_admin_sel_other_expense}
                handleChange={(e) => setGeneralAdminSell(e.target.value)}
                labelText='General, administrative, selling and other expenses'
            />
            <FormRow
                type='number'
                name='cash_hand_bank'
                value={cash_hand_bank}
                handleChange={(e) => setCashInHandnBank(e.target.value)}
                labelText='Cash in hand & at bank'
            />
            <FormRow
                type='number'
                name='inventories'
                value={inventories}
                handleChange={(e) => setInventories(e.target.value)}
                labelText='Inventories'
            />
            <FormRow
                type='number'
                name='fixed_assets'
                value={fixed_assets}
                handleChange={(e) => setFixedAssets(e.target.value)}
                labelText='Fixed Assets'
            />
            <FormRow
                type='number'
                name='other_assets'
                value={other_assets}
                handleChange={(e) => setOtherAssets(e.target.value)}
                labelText='Other Assets'
            />
            <FormRow
                type='number'
                name='opening_capital'
                value={opening_capital}
                handleChange={(e) => setOpeningCapital(e.target.value)}
                labelText='Opening capital'
            />
            <FormRow
                labelText='Withdrawals in the income year'
                type='number'
                name='withdraw_income_year'
                value={withdraw_income_year}
                handleChange={(e) => setWithDraw(e.target.value)}
                
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
}
export default Business;