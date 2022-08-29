import { useState , useEffect} from "react";
import Wrapper from "../../assets/wrappers/Return";
import Tables from '../../components/Tables'
import { useAppContext } from "../../context/appContext";
import IncomeTaxTable from "../../components/IncomeTaxTable";
import getAllCalculation from "../../apis/getAllCalculation";





const salaryInit = {
    salary : '942,630',
    interest : '',
    houseIncome : '',
    agricultureIncome : '',
    businessIncome : '',
    capitalGain : '',
    otherIncome : '20,500',
    firmShare : '',
    minorIncome : '',
    foreignIncome : '',
    investment : '',
    totalIncome : '963,130'

}

const Return = () => {


    
    const {user, token} = useAppContext();

    const initState = {
        assessmentYear : '2016-17',
        name : user.name,
        tin : user.tin,
        gender : user.gender,
        income_year : user.income_year,
        address : user.address,
        birthdate : user.birthdate,
        circle : user.circle,
        citizen_type : user.citizen_type,
        nid : user.nid,
        phone : user.phone,
        resident : user.resident,
        zone : user.zone
        
    }
    const [calculatorInfo, setCalculatorInfo] = useState([]);
    const [slab, setSlab] = useState([]);
    const [allTaxable, setAllTaxable] = useState([])
    console.log("user from in",user);
    var tempAllTaxable = []
    useEffect(()=>{
        getAllCalculation({token}).then((datas)=>{
            console.log(datas);
            var temp = [];
            for(let i = 0; i < 6; i++){
                temp.push({
                    slab: datas.fixedSlab[i],
                    calculatedAmount:  datas.calculatedSlab[i],
                    rate: datas.percentage[i].toString() + '%',
                    tax: datas.slabTax[i]
                })
            }
            temp.push({
                slab: 'Total Taxable Income',
                calculatedAmount: datas.total_taxable,
                rate: 'Total Tax',
                tax: datas.total_tax
            })
            
            tempAllTaxable[0] = datas.salary_total_taxable
        
            tempAllTaxable[1] =  datas.house_total_taxable
            
            tempAllTaxable[2] =  datas.business_total_taxable
          
            tempAllTaxable[3] =  datas.investment_total_taxable
            
            tempAllTaxable[4] =  datas.total_taxable
            console.log("from set",tempAllTaxable[0])
            
            
            setAllTaxable(tempAllTaxable);
            setSlab(temp);
            setCalculatorInfo(datas);
        });
    },[]);

    console.log("where dont kniow",allTaxable)
    
    
    
    return (
        <>
        <div>
            <Tables props={initState} title="Basic Info" />

        </div>
        <div>
            <IncomeTaxTable props={allTaxable} title="Particulars of Income and Tax" />
        </div>
        </>
        
        
    )
}
export default Return;