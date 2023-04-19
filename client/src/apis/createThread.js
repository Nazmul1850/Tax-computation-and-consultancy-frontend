import axios from 'axios';




const createThread = async ({token, text, parentId}) => {


    const authFetch = axios.create({
        baseURL: 'user/',
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
        // "isLevel1":isLevel1,
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