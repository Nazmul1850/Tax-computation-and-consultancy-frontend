
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
const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        return {
          ...state,
          showAlert: true,
          alertType: 'danger',
          alertText: 'Please provide all values!',
        }
      }
    if (action.type === CLEAR_ALERT) {
        return {
          ...state,
          showAlert: false,
          alertType: '',
          alertText: '',
        }
    }
    if (action.type === REGISTER_USER_BEGIN) {
        return {
          ...state,
          isLoading:true,
        }
    }
    
    if (action.type === REGISTER_USER_SUCCESS) {
        return {
          ...state,
          isLoading: false,
          token: action.payload.token,
          user: action.payload.user,
          showAlert: true,
          alertType: 'success',
          alertText: 'User Created. Redirecting!',
        }
    }
    if (action.type === REGISTER_USER_ERROR) {
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: 'danger',
          alertText: action.payload.msg,
        }
    }
    if (action.type === LOGIN_USER_BEGIN) {
      return {
        ...state,
        isLoading:true,
      }
    }
  
    if (action.type === LOGIN_USER_SUCCESS) {
        return {
          ...state,
          isLoading: false,
          token: action.payload.token,
          lawyer: action.payload.lawyer,
          showAlert: true,
          alertType: 'success',
          alertText: 'Logged in Successfull. Redirecting!',
        }
    }
    if (action.type === LOGIN_USER_ERROR) {
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: 'danger',
          alertText: action.payload.msg,
        }
    }
    if (action.type === TOGGLE_SIDEBAR) {
      return { ...state, showSidebar: !state.showSidebar }
    }
    if (action.type === LOGOUT_USER) {
      return {
        ...state,
        lawyer: null,
        token: null,
      }
    }
    if (action.type === HANDLE_CHANGE) {
      return { ...state, [action.payload.name]: action.payload.value }
    }

  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true }
  }
  
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token:action.payload.token,
      lawyer: action.payload.user,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Profile Updated!',
    }
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }



    throw new Error(`no such action :${action.type}`)
  }
export default reducer