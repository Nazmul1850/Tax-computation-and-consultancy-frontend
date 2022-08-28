import axios from 'axios';
import { useAppContext } from '../context/appContext';




const getAllHouse = async ({ token , logoutUser }) => {
    

    const authFetch = axios.create({
        baseURL: 'user/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })

    authFetch.interceptors.response.use(
        (response) => {
          return response
        },
        (error) => {
          console.log(error.response)
          if (error.response.data.msg.code === 401) {
            console.log('AUTH ERROR');
            logoutUser();
          }
          return Promise.reject(error)
        }
    )

    const comment = {
      
    }
    
        
    try {
        const { data } =  await authFetch.post('profile/showAllHouse', {comment})
        const { houses } = data;
        console.log("Here in context",houses);
        
        return houses;
        

    } catch (error) {
        console.log(error.response);
      
    }

}

export default getAllHouse;