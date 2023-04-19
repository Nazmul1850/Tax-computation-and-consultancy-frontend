import axios from 'axios';



const getAllHouse = async ({ token , clientId }) => {
    let cId = clientId.clientId;
    console.log("inside getall house from lawyer",clientId.clientId);
    const authFetch = axios.create({
        baseURL: 'lawyer/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })

    // authFetch.interceptors.response.use(
    //     (response) => {
    //       return response
    //     },
    //     (error) => {
    //       console.log(error.response)
    //       if (error.response.data.msg.code === 401) {
    //         console.log('AUTH ERROR');
    //         logoutUser();
    //       }
    //       return Promise.reject(error)
    //     }
    // )
 
        
    try {
        const { data } =  await authFetch.post('client/showAllHouse', {cId})
        const { houses } = data;
        console.log("Here in context",houses);
        
        return houses;
        

    } catch (error) {
        console.log(error.response);
      
    }

}

export default getAllHouse;