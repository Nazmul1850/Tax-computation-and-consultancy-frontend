import React, { useReducer, useContext} from "react";
import reducer from './reducer'
import axios from 'axios'

import { 
    DISPLAY_ALERT, 
    CLEAR_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    TOGGLE_SIDEBAR,
    LOGOUT_USER,
    HANDLE_CHANGE,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    UPDATE_HOUSE_BEGIN,
    UPDATE_HOUSE_SUCCESS,
    UPDATE_HOUSE_ERROR,
    UPDATE_BUSINESS_BEGIN,
    UPDATE_BUSINESS_SUCCESS,
    UPDATE_BUSINESS_ERROR,
    UPDATE_SALARY_BEGIN,
    UPDATE_SALARY_SUCCESS,
    UPDATE_SALARY_ERROR,
    UPDATE_INVESTMENT_BEGIN,
    UPDATE_INVESTMENT_SUCCESS,
    UPDATE_INVESTMENT_ERROR,
    SAVE_QA_BEGIN,
    SAVE_QA_SUCCESS,
    SAVE_QA_ERROR,
    GET_MSG_BEGIN,
    GET_MSG_SUCCESS,
    GET_MSG_ERROR,
    SET_CONSULTING,
    RESET_CONSULTING,
} from "./actions"


const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const house = localStorage.getItem('house')
const business = localStorage.getItem('business')
const salary = localStorage.getItem('salary')
const investment = localStorage.getItem('investment')
const currentMsgId = localStorage.getItem('currentMsgId')
const allMsg = localStorage.getItem('allMsg')

const initialState = {
    isLoading: false,
    showAlert: false,
    isConsulting:false,
    alertText: '',
    alertType: '',
    user: user ? JSON.parse(user) : null,
    house: house ? JSON.parse(house) : null,
    business: business ? JSON.parse(business) : null,
    salary: salary ? JSON.parse(salary) : null,
    investment: investment ? JSON.parse(investment) : null,
    currentMsgId: currentMsgId ? JSON.parse(currentMsgId) : null,
    allMsg: allMsg ? JSON.parse(allMsg) : null,
    token: token,
    showSidebar: false,

}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const authFetch = axios.create({
        baseURL: 'user/',
        headers: {
          Authorization: `Bearer ${state.token}`,
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



    const displayAlert = () =>{
        dispatch({type:DISPLAY_ALERT})
        clearAlert()
    }
    const clearAlert = () => {
        setTimeout(()=>{
            dispatch({type:CLEAR_ALERT})
        },3000)
    }
    const addUserToLocalStorage = ({ user, token }) => {
        localStorage.setItem('user', JSON.stringify(user))
        console.log("Old token -> ",localStorage.getItem('token'))
        localStorage.setItem('token', token)
        console.log("New token - >",token)
    }

    
    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('house')
        localStorage.removeItem('business')
        localStorage.removeItem('salary')
        localStorage.removeItem('investment')
        localStorage.removeItem('allMsg')
        localStorage.removeItem('isConsulting')

    }
    
    const addHouseToLocalStorage = ({ house }) => {
        localStorage.setItem('house', JSON.stringify(house))        
    }
    const addBusinessToLocalStorage = ({ business }) => {
        localStorage.setItem('business', JSON.stringify(business))        
    }

    const addSalaryToLocalStorage = ({ salary }) => {
        localStorage.setItem('salary', JSON.stringify(salary))        
    }
    const addInvestmentToLocalStorage = ({ investment }) => {
        localStorage.setItem('investment', JSON.stringify(investment))        
    }



    
    


    const registerUser = async (currentUser) =>{
        dispatch({type:REGISTER_USER_BEGIN})
        try {
            const response = await axios.post("/auth/signup",currentUser)
            console.log(response)
            const {user,token} = response.data
            try {
                addUserToLocalStorage({
                    user,
                    token
                  })
            } catch (error) {
                console.log(error)
            }
            dispatch({
                type:REGISTER_USER_SUCCESS,
                payload:{
                    user,
                    token
                }
            });
        } catch (error) {
            console.log(error.response)
            dispatch({
                type: REGISTER_USER_ERROR,
                payload:{
                    msg:error.response.data.msg.msg
                }
            })
        }
        clearAlert() 
    }

    const saveMsg = async (currentMsg) => {
        console.log(currentMsg);
        await authFetch.post('sendMessage',currentMsg);
    }

    const loginUser = async (currentUser) => {
        dispatch({type:LOGIN_USER_BEGIN})
        try {
            const {data} = await axios.post("/auth/login",currentUser)
            console.log(data)
            const {user,house,salary,token} = data
            
            try {
                addUserToLocalStorage({
                    user,
                    token
                  })
                  console.log()
                
               
            } catch (error) {
                console.log(error)
            }
            
            dispatch({
                type:LOGIN_USER_SUCCESS,
                payload:{
                    user,
                    house,
                    salary,
                    token
                }
                
            });
            addHouseToLocalStorage({ house })
            addSalaryToLocalStorage({ salary })
        } catch (error) {
            console.log(error.response)
            dispatch({
                type: LOGIN_USER_ERROR,
                payload:{
                    msg:error.response.data.msg.msg
                }
            })
        }
        clearAlert()
    }
    const logoutUser = () => {
        dispatch({ type: LOGOUT_USER })
        removeUserFromLocalStorage()
    }
    const toggleSidebar = () => {
        dispatch({ type: TOGGLE_SIDEBAR })
    }

    const handleChange = ({ name, value }) => {
        console.log(name,value)
        dispatch({
          type: HANDLE_CHANGE,
          payload: { name, value },
        })
    }
    const updateUser = async (currentUser) => {
        dispatch({ type: UPDATE_USER_BEGIN })
        try {
          const { data } = await authFetch.patch('profile/update', {client:currentUser})
      
          // no token
          console.log(data)
          const { user, token } = data

          console.log(token)
          console.log(state.token)
      
          dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: { user, token },
          })
      
          addUserToLocalStorage({ user, token })
        } catch (error) {
          if(error.response.data.msg.code === 401) {
            logoutUser()
          }
          dispatch({
            type: UPDATE_USER_ERROR,
            payload: { msg: error.response.data.msg.msg },
          })
        }
        clearAlert()
    }

    const updateHouse = async (currentHouse) => {
        console.log("Inside update house");
        console.log(currentHouse);
        dispatch({ type:UPDATE_HOUSE_BEGIN })
        try {
            const { data } = await authFetch.patch('house_property' , {houseProperty:currentHouse});
            const { user, house , token } = data;
            
            console.log(house);

            dispatch({ 
                type:UPDATE_HOUSE_SUCCESS,
                payload: { user, house , token }, 
            });

            addHouseToLocalStorage({ house });
        } catch (error) {
            dispatch({
                type: UPDATE_HOUSE_ERROR,
                payload: { msg: error.response.data.msg.msg },
            });
        }
        clearAlert();
    }

    const updateBusiness = async (currentBusiness) => {
        console.log("Inside update business");
        
        dispatch({ type:UPDATE_BUSINESS_BEGIN })
        try {
            const { data } = await authFetch.patch('profile/business' , {newBusiness:currentBusiness});
            const { user, business , token } = data;
            
            console.log(business);

            dispatch({ 
                type:UPDATE_BUSINESS_SUCCESS,
                payload: { user, business , token }, 
            });

            addBusinessToLocalStorage({ business });
        } catch (error) {
            dispatch({
                type: UPDATE_BUSINESS_ERROR,
                payload: { msg: error.response.data.msg.msg },
            });
        }
        clearAlert();
    }

    const saveNewQuestion = async (question) => {
        dispatch({ type:SAVE_QA_BEGIN })
        try {
            const { data } =  await authFetch.patch('/profile/createQA',{question})
            const { user , token } = data;
            
            console.log(data);
            dispatch({ 
                type:SAVE_QA_SUCCESS,
                payload: { user , token }, 
            });

            

        } catch (error) {
            console.log(error.response);
            dispatch({
                type: SAVE_QA_ERROR,
                payload: { msg: error.response.data.msg.msg },
            });
           
        }
        clearAlert();
        return;
        
    }



    const updateSalary = async (currentSalary) => {
        console.log("Inside update salary");
        console.log(currentSalary);
        dispatch({ type:UPDATE_SALARY_BEGIN })
        try {
            const { data } = await authFetch.patch('salary' , {salaryInfo:currentSalary});
            const { user, salary , token } = data;
            
            console.log(salary);

            dispatch({ 
                type:UPDATE_SALARY_SUCCESS,
                payload: { user, salary , token }, 
            });

            addSalaryToLocalStorage({ salary });
        } catch (error) {
            dispatch({
                type: UPDATE_SALARY_ERROR,
                payload: { msg: error.response.data.msg.msg },
            });
        }
        clearAlert();
    }

    const updateInvestment = async (currentInvestment) => {
        console.log("Inside investment salary");
        console.log(currentInvestment);
        dispatch({ type:UPDATE_INVESTMENT_BEGIN })
        try {
            const { data } = await authFetch.patch('profile/investment' , {investmentInfo:currentInvestment});
            const { user, investment , token } = data;
            
            console.log("app context er investmetn",investment);

            dispatch({ 
                type:UPDATE_INVESTMENT_SUCCESS,
                payload: { user, investment , token }, 
            });

            addInvestmentToLocalStorage({ investment });
        } catch (error) {
            dispatch({
                type: UPDATE_INVESTMENT_ERROR,
                payload: { msg: error.response.data.msg.msg },
            });
        }
        clearAlert();
    }

    const getMessages = async () => {
        console.log("getting msg");
        dispatch({ type:GET_MSG_BEGIN })
        try {
        const { data } = await authFetch.get('/showMessage' , currentMsgId);
            let allReplies=[];
            const oldReplies = JSON.parse(localStorage.getItem('allMsag'));
            allReplies.push(oldReplies)
            const newReplies = data.replies;
            allReplies.push(newReplies)
            localStorage.setItem('allMsg',JSON.stringify(allReplies))
            dispatch({ 
                type:GET_MSG_SUCCESS,
            });

        } catch (error) {
            dispatch({
                type: GET_MSG_ERROR,
                payload: { msg: error.response.data.msg.msg },
            });
        }
        clearAlert();
    }

    const singleFileUpload = async (data, options) => {
        try {
            await authFetch.post('singleFile', data, options);
        } catch (error) {
            throw error;
        }
    }
    const getSingleFiles = async () => {
        try {
            const {data} = await authFetch.post('getSingleFiles');
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    const downloadFile = async (fileId) => {
        try{
            const {data} = await authFetch.post('fileDownload', {fileId}, {
                responseType: 'blob'
            });
            return data;
        } catch (error) {
            console.log('failed');
        }
    }
    const setConsulting = () => {
        dispatch({
            type: SET_CONSULTING,
        });
    }

    const reSetConsulting = () => {
        dispatch({
            type: RESET_CONSULTING,
        });
    }


    return (
      <AppContext.Provider
        value={{
          ...state,
          displayAlert,
          registerUser,
          loginUser,
          toggleSidebar,
          logoutUser,
          handleChange,
          updateUser,
          updateHouse,
          updateBusiness,
          updateSalary,
          saveNewQuestion,
          getMessages,
          singleFileUpload,
          getSingleFiles,
          saveMsg,
          downloadFile,
          updateInvestment,
          setConsulting,
          reSetConsulting,
        }}
      >
        {children}
      </AppContext.Provider>
    )
}



const useAppContext = () => {
    return useContext(AppContext)
  }
  
export { AppProvider, initialState, useAppContext}