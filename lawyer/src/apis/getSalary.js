import axios from 'axios';






const getSalary = async ({token,clientId}) => {


    const authFetch = axios.create({
        baseURL: 'lawyer/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })

    const props = {
        "clientId" : clientId
    }
    
    try {
        const { data } =  await authFetch.post('client/salary',{props})
        const salary = data.salary;
        
        return salary;
        

    } catch (error) {
        console.log(error.response);
      
    }

}

export default getSalary;