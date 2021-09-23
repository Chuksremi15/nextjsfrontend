import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  POST_TOKEN_REFRESH_FAIL,
  POST_TOKEN_REFRESH_LOADING,
  POST_TOKEN_REFRESH_REQUEST,
  POST_TOKEN_REFRESH_SUCCESS,
  POST_UPDATE_USER_FAIL,
  POST_UPDATE_USER_LOADING,
  POST_UPDATE_USER_REQUEST,
  POST_UPDATE_USER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../types";

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const loginRequest = (prop) => {
  return {
    type: LOGIN_REQUEST,
    payload: prop,
  };
};
export const loginSuccess = (prop) => {
  return {
    type: LOGIN_SUCCESS,
    payload: prop,
  };
};

export const loginFailure = (errors) => {
  return {
    type: LOGIN_FAIL,
    payload: { errors },
  };
};

export const loginLoading = (loading) => {
  return {
    type: LOGIN_LOADING,
    payload: loading,
  };
};

export const postTokenRefreshRequest = (prop) => {
  return {
    type: POST_TOKEN_REFRESH_REQUEST,
    payload: prop,
  };
};
export const postTokenRefreshSuccess = (prop) => {
  return {
    type: POST_TOKEN_REFRESH_SUCCESS,
    payload: prop,
  };
};

export const postTokenRefreshFailure = (errors) => {
  return {
    type: POST_TOKEN_REFRESH_FAIL,
    payload: { errors },
  };
};

export const postTokenRefreshLoading = (loading) => {
  return {
    type: POST_TOKEN_REFRESH_LOADING,
    payload: loading,
  };
};

export const registerRequest = (prop) => {
  return {
    type: REGISTER_REQUEST,
    payload: prop,
  };
};
export const registerSuccess = (prop) => {
  return {
    type: REGISTER_SUCCESS,
    payload: prop,
  };
};

export const registerFailure = (errors) => {
  return {
    type: REGISTER_FAIL,
    payload: { errors },
  };
};

export const registerLoading = (loading) => {
  return {
    type: REGISTER_LOADING,
    payload: loading,
  };
};

export const postUpdateUserRequest = (prop) => {
  return {
    type: POST_UPDATE_USER_REQUEST,
    payload: prop,
  };
};
export const postUpdateUserSuccess = (prop) => {
  return {
    type: POST_UPDATE_USER_SUCCESS,
    payload: prop,
  };
};

export const postUpdateUserFailure = (errors) => {
  return {
    type: POST_UPDATE_USER_FAIL,
    payload: { errors },
  };
};

export const postUpdateUserLoading = (loading) => {
  return {
    type: POST_UPDATE_USER_LOADING,
    payload: loading,
  };
};
