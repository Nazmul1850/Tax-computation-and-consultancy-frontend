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
    TOGGLE_SIDEBAR,
    LOGOUT_USER,
    HANDLE_CHANGE,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
} from "./actions"


const token = localStorage.getItem('token')
const lawyer = localStorage.getItem('lawyer')
const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    lawyer: lawyer ? JSON.parse(lawyer) : null,
    token: token,
    showSidebar: false,

}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const authFetch = axios.create({
        baseURL: 'lawyer/',
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
    })
    const displayAlert = () =>{
        dispatch({type:DISPLAY_ALERT})
        clearAlert()
    }
    const clearAlert = () => {
        setTimeout(()=>{
            dispatch({type:CLEAR_ALERT})
        },3000)
    }
    const addUserToLocalStorage = ({ lawyer, token }) => {
        localStorage.setItem('lawyer', JSON.stringify(lawyer))
        localStorage.setItem('token', token)
    }
    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('lawyer')
    }


    const registerUser = async (currentUser) =>{
        dispatch({type:REGISTER_USER_BEGIN})
        try {
            const response = await axios.post("/auth/signup",currentUser)
            console.log(response)
            const {lawyer,token} = response.data
            try {
                addUserToLocalStorage({
                    lawyer,
                    token
                  })
            } catch (error) {
                console.log(error)
            }
            dispatch({
                type:REGISTER_USER_SUCCESS,
                payload:{
                    lawyer,
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
    const loginLawyer = async (currentUser) => {
        dispatch({type:LOGIN_USER_BEGIN})
        try {
            const {data} = await axios.post("/auth/lawyer/login",currentUser)
            // console.log(response)
            const {lawyer,token} = data
            console.log(lawyer)
            try {
                addUserToLocalStorage({
                    lawyer,
                    token
                  })
            } catch (error) {
                console.log(error)
            }
            dispatch({
                type:LOGIN_USER_SUCCESS,
                payload:{
                    lawyer,
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
    const updateLawyer = async (currentUser) => {
        dispatch({ type: UPDATE_USER_BEGIN })
        try {
          const { data } = await authFetch.patch('update', {client:currentUser})
      
          // no token
          console.log(data)
          const { lawyer, token } = data
          console.log(lawyer)
      
          dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: { lawyer, token },
          })
      
          addUserToLocalStorage({ lawyer, token })
        } catch (error) {
          dispatch({
            type: UPDATE_USER_ERROR,
            payload: { msg: error.response.data.msg.msg },
          })
          if(error.response.data.msg.code === 401) {
            logoutUser()
          }
        }
        clearAlert()
    }
    return (
      <AppContext.Provider
        value={{
          ...state,
          displayAlert,
          registerUser,
          loginLawyer,
          toggleSidebar,
          logoutUser,
          handleChange,
          updateLawyer,
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