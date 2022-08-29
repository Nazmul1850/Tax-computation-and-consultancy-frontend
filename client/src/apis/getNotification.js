import axios from 'axios';






const getNotification = async ({token}) => {


    const authFetch = axios.create({
        baseURL: 'user/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })

    
    try {
        const nt =  await authFetch.get('/notifications')
        console.log('paisi',nt.data);
        return nt.data;
        

    } catch (error) {
        console.log(error.response);
      
    }

}

export default getNotification;