import axios from 'axios';






const getClients = async ({token}) => {


    const authFetch = axios.create({
        baseURL: 'lawyer/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })

    
    try {
        const { data } =  await authFetch.get('/showClients')
        const clients = data.clients;
        
        return clients;
        

    } catch (error) {
        console.log(error.response);
      
    }

}

export default getClients;