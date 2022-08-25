import axios from 'axios';




const updateComment = async ({token, currentId, text}) => {


  const authFetch = axios.create({
      baseURL: 'user/',
      headers: {
        Authorization: `Bearer ${token}`,
      },
  })
  const comment = {
    "currentId": currentId,
    "text":text
}
console.log("body->", comment)
try {
    const { data } =  await authFetch.post('/updateMessage',{comment})
    console.log("create thread response"+data.mesage)
    const cm = data.mesage;
    
    return cm;
    

} catch (error) {
    console.log(error.response);
  
}

   
}

export default updateComment;