import axios from "axios";
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
  ADMIN_LOADED,
  ADMIN_LOADING
} from "./types";

import { returnErrors } from "./errorActions";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios
    .get("/auth/user", tokenConfig(getState))
    .then((res) => {
      if (res.data.email === "admin") {
        dispatch({
          type: ADMIN_LOADED,
          payload: res.data
        });
      } else {
        dispatch({
          type: USER_LOADED,
          payload: res.data
        });
        // console.log(res.data);
      }
    })
    .catch((err) => {
      if (err.response && err.response.data) {
        dispatch(returnErrors(err.response.data, err.response.status));
      }

      dispatch({
        type: AUTH_ERROR
      });
    });
};

export const register = ({ first_name, last_name, email, password }) => (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ first_name, last_name, email, password });

  axios
    .post("/users/add", body, config)
    .then((res) => {
      if (res.data) {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
        });
      }
    })
    .catch((err) => {
      if (err.response && err.response.data) {
        dispatch(
          returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
        );
      }

      dispatch({
        type: REGISTER_FAIL
      });
    });
};

export const login = ({ email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  axios
    .post("/auth/", body, config)
    .then((res) => {
      if (res.data) {
        if (res.data.email === "admin") {
          dispatch({
            type: ADMIN_LOGIN,
            payload: res.data
          });
        } else {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
          });
        }
      }
    })
    .catch((err) => {
      if (err.response && err.response.data) {
        dispatch(
          returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
        );
      }

      dispatch({
        type: LOGIN_FAIL
      });
    });
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

// export const adminlogin = ({ username, password } = dispatch => {

// });

export const adminlogin = ({ email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  if (email === "admin" && password === "admin") {
    axios
      .post("/auth/", body, config)
      .then((res) => {
        if (res.data) {
          dispatch({
            type: ADMIN_LOGIN,
            payload: res.data
          });
        }
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          dispatch(
            returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
          );
        }

        dispatch({
          type: LOGIN_FAIL
        });
      });
  }
};

export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};

export const adminlogout = () => {
  return {
    type: ADMIN_LOGOUT
  };
};
