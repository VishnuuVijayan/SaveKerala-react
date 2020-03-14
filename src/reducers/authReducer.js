import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  ADMIN_LOGIN,
  ADMIN_LOGOUT,
  ADMIN_LOADED
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAdminAuthenticated: false,
  isAuthenticated: false,
  isLoading: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        isAdminAuthenticated: false,
        user: action.payload
      };
    case ADMIN_LOADED:
      return {
        ...state,
        isAdminAuthenticated: true,
        isAuthenticated: false,
        isLoading: false,
        user: action.payload
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isAdminAuthenticated: false,
        isLoading: false
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };
    case ADMIN_LOGIN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: false,
        isAdminAuthenticated: true,
        isLoading: false
      };
    case ADMIN_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAdminAuthenticated: false,
        isAuthenticated: false,
        isLoading: false
      };
    default:
      return state;
  }
}
