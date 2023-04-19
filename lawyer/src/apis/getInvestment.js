import axios from 'axios';


const getInvestment = async ({token,clientId}) => {


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
        const { data } =  await authFetch.post('client/investment',{props})
        const investment = data.investment;
        
        return investment;
        

    } catch (error) {
        console.log(error.response);
      
    }

}

export default getInvestment;