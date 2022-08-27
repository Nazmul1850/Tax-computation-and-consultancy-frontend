
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
    SAVE_QA_BEGIN,
    SAVE_QA_SUCCESS,
    SAVE_QA_ERROR,
    GET_MSG_BEGIN,
    GET_MSG_SUCCESS,
    GET_MSG_ERROR,
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
          user: action.payload.user,
          house: action.payload.house,
          salary: action.payload.salary,
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
        user: null,
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
      user: action.payload.user,
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
  if (action.type === UPDATE_HOUSE_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === UPDATE_HOUSE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token:action.payload.token,
      user: action.payload.user,
      house: action.payload.house,
      showAlert: true,
      alertType: 'success',
      alertText: 'House property Updated!',
    }
  }

  if (action.type === UPDATE_HOUSE_ERROR) {
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
      token:action.payload.token,
      user: action.payload.user,
      business: action.payload.business,
      showAlert: true,
      alertType: 'success',
      alertText: 'Business Updated!',
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


  if (action.type === UPDATE_SALARY_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === UPDATE_SALARY_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token:action.payload.token,
      user: action.payload.user,
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

  if (action.type === SAVE_QA_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === SAVE_QA_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token:action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: 'success',
      alertText: 'Question Saved',
    }
  }

  if (action.type === SAVE_QA_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }

  if (action.type === GET_MSG_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === GET_MSG_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Message Recieved',
    }
  }

  if (action.type === GET_MSG_ERROR) {
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