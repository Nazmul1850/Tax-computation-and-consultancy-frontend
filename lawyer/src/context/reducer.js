
import {
  CLEAR_ALERT, 
  DISPLAY_ALERT, 
  HANDLE_CHANGE, 
  LOGIN_USER_BEGIN, 
  LOGIN_USER_ERROR, 
  LOGIN_USER_SUCCESS, 
  LOGOUT_USER, 

  REGISTER_USER_BEGIN, 
  REGISTER_USER_ERROR, 
  REGISTER_USER_SUCCESS, 
  TOGGLE_SIDEBAR, 
  UPDATE_SALARY_BEGIN, 
  UPDATE_SALARY_ERROR, 
  UPDATE_SALARY_SUCCESS, 
  UPDATE_USER_BEGIN, 
  UPDATE_USER_ERROR, 

  UPDATE_USER_SUCCESS ,    
  UPDATE_INVESTMENT_BEGIN,
  UPDATE_INVESTMENT_SUCCESS,
  UPDATE_INVESTMENT_ERROR,
  UPDATE_BUSINESS_BEGIN,
  UPDATE_BUSINESS_SUCCESS,
  UPDATE_BUSINESS_ERROR,


  SET_CURRENT_CLIENT,

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
    if (action.type === SET_CURRENT_CLIENT) {
      return {
        ...state,
        client:action.payload.client,
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
        client:null,
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

  if (action.type === UPDATE_SALARY_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === UPDATE_SALARY_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      salary: action.payload.salary,
      showAlert: true,
      alertType: 'success',
      alertText: 'Salary Updated!',
    }
  }

  if (action.type === UPDATE_SALARY_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }


  if (action.type === UPDATE_BUSINESS_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === UPDATE_BUSINESS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      business: action.payload.business,
      showAlert: true,
      alertType: 'success',
      alertText: 'Salary Updated!',
    }
  }

  if (action.type === UPDATE_BUSINESS_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }

  if (action.type === UPDATE_INVESTMENT_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === UPDATE_INVESTMENT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      investment: action.payload.investment,
      showAlert: true,
      alertType: 'success',
      alertText: 'Investment Updated!',
    }
  }

  if (action.type === UPDATE_INVESTMENT_ERROR) {
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