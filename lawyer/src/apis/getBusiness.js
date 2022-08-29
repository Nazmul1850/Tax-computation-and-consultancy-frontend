import axios from 'axios';


const getBusiness = async ({token,clientId}) => {


    const authFetch = axios.create({
        baseURL: 'lawyer/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })

    const props = {
        "clientId" : clientId
    }
    
    try {
        const { data } =  await authFetch.post('client/business',{props})
        const business = data.business;
        
        return business;
        

    } catch (error) {
        console.log(error.response);
      
    }

}

export default getBusiness;