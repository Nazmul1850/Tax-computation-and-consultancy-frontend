import axios from 'axios';






const createAsses = async ({token, income_year}) => {


    const authFetch = axios.create({
        baseURL: 'user/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })
    
    try {
        console.log(income_year);
        const { data } =  await authFetch.post('/createAsses',{income_year})
        
        return data.asseses;
        

    } catch (error) {
        console.log(error.response);
      
    }

}

export default createAsses;