import axios from 'axios';






const getComments = async ({token}) => {


    const authFetch = axios.create({
        baseURL: 'user/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })
    const comment = {
      
    }
    
    try {
        const { data } =  await authFetch.post('/showMessage', {comment})
        const comments = data.replies;
        
        return comments;
        

    } catch (error) {
        console.log(error.response);
      
    }

}

export default getComments;