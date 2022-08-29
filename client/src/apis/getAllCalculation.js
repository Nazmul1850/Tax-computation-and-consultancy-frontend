import axios from 'axios';






const getAllCalculation = async ({token}) => {


    const authFetch = axios.create({
        baseURL: 'user/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })

    
    try {
        const { data } =  await authFetch.get('/calculateSalary')
        
        return data;
        

    } catch (error) {
        console.log(error.response);
      
    }

}

export default getAllCalculation;