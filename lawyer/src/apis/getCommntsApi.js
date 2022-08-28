import axios from 'axios';






const getComments = async ({token, clientId}) => {

    console.log("Client Id",clientId)
    const authFetch = axios.create({
        baseURL: 'lawyer/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })

    const comment = {
        "clientId":clientId
    }

    
    try {
        const { data } =  await authFetch.post('/showMessage',{comment})
        const comments = data.replies;
        console.log("data -- >"+data)
        return comments;
        

    } catch (error) {
        console.log(error.response);
      
    }

}

export default getComments;