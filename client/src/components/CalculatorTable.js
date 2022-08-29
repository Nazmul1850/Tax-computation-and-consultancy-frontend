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

const coloums3 = [
    {
        name:"No.",
        selector: (row)=> row.number
    },
    {
        name:"Name",
        selector: (row)=> row.name
    },
    {
        name:"Value",
        selector: (row)=> row.value
    }
    
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


const CalculatorTable = ({token , user})=> {
    // console.log("user",user)
    const [calculatorInfo, setCalculatorInfo] = useState([]);
    const [slab, setSlab] = useState([]);
    const [allTaxable, setAllTaxable] = useState([])
    const [basicInfo , setBasicInfo] = useState([])
    // var temp = [];
    // temp.push({
    //     number: '1',
    //     name : 'Assessment Year',
    //     value : '2022-23'
    // })
    // temp.push({
    //     number: '2',
    //     name : 'Return Submitted under section 822B?',
    //     value : 'Yes'
    // })
    // temp.push({
    //     number: '3',
    //     name : 'Name of the Assesse',
    //     value : user.name
    // })
    // temp.push({
    //     number: '4',
    //     name : 'Gender',
    //     value : user.gender
    // })
    // temp.push({
    //     number: '5',
    //     name : 'TIN',
    //     value : user.tin
    // })
    // temp.push({
    //     number: '6',
    //     name : 'Old TIN',
    //     value : ''
    // })
    // temp.push({
    //     number : '7',
    //     name : 'Circle',
    //     value : user.circle
    // })
    // temp.push({
    //     number : '8',
    //     name : 'Zone',
    //     value : user.zone
    // })
    // temp.push({
    //     number : '9',
    //     name : 'Resident Status',
    //     value : user.resident
    // })
    // temp.push({
    //     number : '10',
    //     name : 'Citizen Type',
    //     value : user.citizen_type
    // })
    // temp.push({
    //     number : '11',
    //     name : 'Date Of Birth',
    //     value : user.birthdate
    // })
    // temp.push({
    //     number : '12',
    //     name : 'Income Year',
    //     value : user.income_year
    // })
    // temp.push({
    //     number : '13',
    //     name : 'If emplyed, emplyers name',
    //     value : ''
    // })
    // temp.push({
    //     number : '14',
    //     name : 'Spouse Name',
    //     value : ''
    // })
    // temp.push({
    //     number : '15',
    //     name : 'Spouse TIN if any',
    //     value : ''
    // })
    // temp.push({
    //     number : '16',
    //     name : 'Father Name',
    //     value : ''
    // })
    // temp.push({
    //     number : '17',
    //     name : 'Mother Name',
    //     value : ''
    // })
    // temp.push({
    //     number : '18',
    //     name : 'Present Address',
    //     value : user.address
    // })
    // temp.push({
    //     number : '19',
    //     name : 'Permanent Address',
    //     value : user.address
    // })

    // temp.push({
    //     number : '20',
    //     name : 'Contact Telephone',
    //     value : user.phone
    // })
    // temp.push({
    //     number : '21',
    //     name : 'Email',
    //     value : user.email
    // })
    // temp.push({
    //     number : '22',
    //     name : 'National Identification Number',
    //     value : user.nid
    // })
    // temp.push({
    //     number : '23',
    //     name : 'Business Identification Number',
    //     value : ''
    // })
    // useEffect(()=>{
    //     AllCalculated({token}).then((datas)=>{
    //         console.log(datas);
    //         var temp = [];
    //         for(let i = 0; i < 6; i++){
    //             temp.push({
    //                 slab: datas.fixedSlab[i],
    //                 calculatedAmount:  datas.calculatedSlab[i],
    //                 rate: datas.percentage[i].toString() + '%',
    //                 tax: datas.slabTax[i]
    //             })
    //         }
    //         temp.push({
    //             slab: 'Total Taxable Income',
    //             calculatedAmount: datas.total_taxable,
    //             rate: 'Total Tax',
    //             tax: datas.total_tax
    //         })
    //         var tempAllTaxable = []
    //         tempAllTaxable.push({
    //             total: "Salary",
    //             amount: datas.salary_total_taxable
    //         })
    //         tempAllTaxable.push({
    //             total: "House Property",
    //             amount: datas.house_total_taxable
    //         })
    //         tempAllTaxable.push({
    //             total: "Investment",
    //             amount: datas.business_total_taxable
    //         })
    //         tempAllTaxable.push({
    //             total: "Business",
    //             amount: datas.investment_total_taxable
    //         })
    //         tempAllTaxable.push({
    //             total: "Total Taxable",
    //             amount: datas.total_taxable
    //         })
            
    //         setAllTaxable(tempAllTaxable);
    //         setSlab(temp);
    //         setCalculatorInfo(datas);
    //     });
    // },[]);
    // // setBasicInfo(temp);
    return (
        <Wrapper>
            <div className="slab-container">
                {/* <Tables props={allTaxable} title="Total Taxables" /> 
                <DataTable columns={columns_2} data={allTaxable} title="All Taxables"/>   
                <DataTable columns={coloums} data={slab} title="Slab Calculation"/>
                <DataTable columns={coloums3} data={temp} title="Basic Information"/> */}
            </div>
        </Wrapper>
    )
}

export default CalculatorTable;