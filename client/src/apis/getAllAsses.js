import axios from 'axios';






const getComments = async ({token}) => {


    const authFetch = axios.create({
        baseURL: 'user/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })

    
    try {
        const asses =  await authFetch.get('/getAllAsses')
        console.log('from api',asses.data);
        return asses.data;
        

    } catch (error) {
        console.log(error.response);
      
    }

}

export default getComments;