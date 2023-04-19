import axios from 'axios';




const deleteComment = async ({token, currentId}) => {


  const authFetch = axios.create({
      baseURL: 'user/',
      headers: {
        Authorization: `Bearer ${token}`,
      },
  })
  const comment = {
    "currentId": currentId
}
console.log("body->", comment)
try {
    const { data } =  await authFetch.post('/deleteMessage',{comment})
    console.log("create thread response"+data.mesage)
    const cm = data.mesage;
    
    return cm;
    

} catch (error) {
    console.log(error.response);
  
}

   
}

export default deleteComment;