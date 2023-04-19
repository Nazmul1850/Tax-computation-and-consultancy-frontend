import axios from 'axios';






const getQa = async ({token , clientId}) => {


    const authFetch = axios.create({
        baseURL: 'lawyer/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })

    const comment = {
        "clientId" : clientId
    }
    console.log("inside", clientId)
    
    try {
        const { data } =  await authFetch.post('/get/questions',{comment})
        const clients = data.qas;
        
        return clients;
        

    } catch (error) {
        console.log(error.response);
      
    }

}

export default getQa;