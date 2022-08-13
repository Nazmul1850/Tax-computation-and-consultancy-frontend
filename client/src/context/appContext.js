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
const user = localStorage.getItem('user')
const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: user ? JSON.parse(user) : null,
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
    const loginUser = async (currentUser) => {
        dispatch({type:LOGIN_USER_BEGIN})
        try {
            const {data} = await axios.post("/auth/login",currentUser)
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
      
          dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: { user, token },
          })
      
          addUserToLocalStorage({ user, token })
        } catch (error) {
          dispatch({
            type: UPDATE_USER_ERROR,
            payload: { msg: error.response.data.msg.msg },
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
          loginUser,
          toggleSidebar,
          logoutUser,
          handleChange,
          updateUser,
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