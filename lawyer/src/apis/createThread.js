import axios from 'axios';





const createThread = async ({token, text, parentId, clientId}) => {


    const authFetch = axios.create({
        baseURL: 'lawyer/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })
    var isLevel1;
    if(parentId) {
        isLevel1 = false;
    }else {
        isLevel1 = true;
    }



    const comment = {
        "body" : text,
        "time" : new Date().toISOString(),
        "receiverId":clientId,
        "parentId":parentId
    }
    console.log("body->", comment)
    try {
        const { data } =  await authFetch.post('/sendMessage',{comment})
        console.log("create thread response"+data.mesage)
        const cm = data.mesage;
        
        return cm;
        

    } catch (error) {
        console.log(error.response);
      
    }

}

export default createThread;