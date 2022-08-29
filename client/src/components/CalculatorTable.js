import Wrapper from "../assets/wrappers/CalculatorTable"
import DataTable from "react-data-table-component"
import { TextField } from "@mui/material"
import FormRow from "./FormRow"
import Tables from '../components/ReportTables'
import { useState, useEffect } from "react"
import AllCalculated from '../apis/getAllCalculation'




const coloums = [
    {
        name:"Slabs",
        selector: (row)=> row.slab
    },
    {
        name:"Amount",
        selector: (row)=> row.calculatedAmount
    },
    {
        name:"Rate",
        selector: (row)=> row.rate
    },
    {
        name:"Tax",
        selector: (row)=> row.tax
    },
]

const columns_2 = [
    {
        name:"Total Taxable",
        selector: (row)=> row.total
    },
    {
        name:"Amount",
        selector: (row)=> row.amount
    }
];


const CalculatorTable = ({token})=> {
    const [calculatorInfo, setCalculatorInfo] = useState([]);
    const [slab, setSlab] = useState([]);
    const [allTaxable, setAllTaxable] = useState([])
    useEffect(()=>{
        AllCalculated({token}).then((datas)=>{
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
            var tempAllTaxable = []
            tempAllTaxable.push({
                total: "Salary",
                amount: datas.salary_total_taxable
            })
            tempAllTaxable.push({
                total: "House Property",
                amount: datas.house_total_taxable
            })
            tempAllTaxable.push({
                total: "Investment",
                amount: datas.business_total_taxable
            })
            tempAllTaxable.push({
                total: "Business",
                amount: datas.investment_total_taxable
            })
            tempAllTaxable.push({
                total: "Total Taxable",
                amount: datas.total_taxable
            })
            
            setAllTaxable(tempAllTaxable);
            setSlab(temp);
            setCalculatorInfo(datas);
        });
    },[]);
    return (
        <Wrapper>
            <div className="slab-container">
                {/* <Tables props={allTaxable} title="Total Taxables" />  */}
                <DataTable columns={columns_2} data={allTaxable} title="All Taxables"/>   
                <DataTable columns={coloums} data={slab} title="Slab Calculation"/>
            </div>
        </Wrapper>
    )
}

export default CalculatorTable;