import axios from 'axios';
import { useState } from 'react';
import Wrapper from '../assets/wrappers/DashboardFormPage';






const getComments = async ({token}) => {


    const authFetch = axios.create({
        baseURL: 'user/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })

    
    try {
        const { data } =  await authFetch.get('/showMessage')
        const comments = data.replies;
        
        return comments;
        

    } catch (error) {
        console.log(error.response);
      
    }

}

export default getComments;