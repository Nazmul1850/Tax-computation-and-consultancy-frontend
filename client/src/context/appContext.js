import React, { useState, useReducer, useContext} from "react";
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
} from "./actions"


const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: user ? JSON.parse(user) : null,
    token: token,

}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

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
        localStorage.setItem('token', token)
    }
    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    const registerUser = async (currentUser) =>{
        dispatch({type:REGISTER_USER_BEGIN})
        try {
            const response = await axios.post("/user/signup",currentUser)
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
    const loginUser = async (currentUser) => {
        dispatch({type:LOGIN_USER_BEGIN})
        try {
            const {data} = await axios.post("/user/login",currentUser)
            // console.log(response)
            const {user,token} = data
            try {
                addUserToLocalStorage({
                    user,
                    token
                  })
            } catch (error) {
                // console.log(error)
            }
            dispatch({
                type:LOGIN_USER_SUCCESS,
                payload:{
                    user,
                    token
                }
            });
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
    return (
      <AppContext.Provider
        value={{
          ...state,
          displayAlert,
          registerUser,
          loginUser
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