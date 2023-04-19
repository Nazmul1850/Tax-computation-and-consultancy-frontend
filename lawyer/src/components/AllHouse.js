import React , { useEffect, useState } from 'react'
import getAllHouse from '../apis/getHouses';
import Wrapper from '../assets/wrappers/Logo';
import { useAppContext } from '../context/appContext';
import HouseContainer from './HouseContainer';

import './AllHouse.css'





const AllHouse = (clientId) => {

    const { client , token } = useAppContext();
    const [myHouse, setMyHouse] = useState([]);


    //getAllHouse({token,currentUserId});
    console.log("from all house",token)
    useEffect(() => {
        getAllHouse({clientId,token}).then((datas)=>{
            console.log(datas);
            setMyHouse(datas);
        });
    },[]);
    console.log("here in all house in my house test it now",myHouse)

    if(myHouse.length === 0){
      return(
        <Wrapper>
          <h2>
            No house to display.
          </h2>
        </Wrapper>
      )
    }


  return (
    <div className='allHouse'>
      <div className='container'>
        {myHouse.map((house) =>{
          console.log("my houses: ",house);
          return <HouseContainer 
          key={house[0]._id}
          address={house[0].address}
          repair={house[0].repair}
          total_area = {house[0].total_area}
          share = {house[0].share}
          annual_value = {house[0].annual_value}
          municipal = {house[0].municipal}
          land_rev = {house[0].land_rev}
          loan_mort = {house[0].loan_mort}
          insurance_premium = {house[0].insurance_premium}
          vacancy_allow = {house[0].vacancy_allow}
          other = {house[0].other}
          other_comment = {house[0].other_comment}
          total_deduction = {house[0].total_deduction}
          total_house_income = {house[0].total_house_income}
          total_taxable = { house[0].total_taxable}
          
          /> 
        })}
      </div>
        
    </div>
  )
}

export default AllHouse;
