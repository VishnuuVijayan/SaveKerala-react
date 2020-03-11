import axios from "axios";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS
} from "./types";

import { returnErrors } from "./errorActions";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios
    .get("http://localhost:5000/auth/user", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      if (err.response && err.response.data) {
        dispatch(returnErrors(err.response.data, err.response.status));
      }

      dispatch({
        type: AUTH_ERROR
      });
    });
};

export const register = ({
  first_name,
  last_name,
  email,
  password
}) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ first_name, last_name, email, password });

  axios
    .post("http://localhost:5000/users/add", body, config)
    .then(res => {
      if (res.data) {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
        });
      }
    })
    .catch(err => {
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

export const login = ({ email, password }) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  axios
    .post("http://localhost:5000/auth/", body, config)
    .then(res => {
      if (res.data) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        });
      }
    })
    .catch(err => {
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

export const tokenConfig = getState => {
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
