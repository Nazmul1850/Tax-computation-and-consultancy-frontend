import React from 'react'
import DataCard from './DataCard';

import './HouseContainer.css'

const HouseContainer = ({address , repair , total_area , share , annual_value , municipal , land_rev , loan_mort , insurance_premium , vacancy_allow , other , other_comment , total_deduction , total_house_income , total_taxable}) => {
  return (
    <div className='card'>
      <div className= 'card_title'>
           <h4>
                Address : {address}
            </h4> 
      </div>
      <div className='otherContents'>
        <DataCard 
          type="Repair Cost"
          value={repair}
        />
        <DataCard 
          type="Total Area"
          value={total_area}
        />
        <div className= 'card_body'>
            <p>
                  Share of Assessee : {share} %
              </p> 
          </div>
        <DataCard 
          type="Annual Value from Property"
          value={annual_value}
        />
        <DataCard 
          type="Municipal"
          value={municipal}
        />
        <DataCard 
          type="Land Revenue"
          value={land_rev}
        />
        <DataCard 
          type="Interest on Loan/Mortgage/Capital"
          value={loan_mort}
        />
        <DataCard 
          type="Insurance Premium"
          value={insurance_premium}
        />
        <DataCard 
          type="Vacancy Allowance"
          value={vacancy_allow}
        />
        <DataCard 
          type="Others"
          value={other}
        />
        <div className= 'card_body'>
            <p>
                  Comment : {other_comment}
              </p> 
          </div>
        <DataCard 
          type="Total Deduction"
          value={total_deduction}
        />
        <DataCard 
          type="Total House Income"
          value={total_house_income}
        />
        <DataCard 
          type="Total Taxable"
          value={total_taxable}
        />
      </div>
      
    </div>
  )
}
export default HouseContainer;