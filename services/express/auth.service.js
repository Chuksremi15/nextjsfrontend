import axios from "axios";
import { baseURL } from "../../constants/api";

//update user profile
export const updateUser = (credentials, token) => {
  return axios
    .put(`${baseURL}/user/edit/profile`, credentials, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => ({
      error: false,
      message: res.data.message,
      // user: res.data.updatedUser,
    }))
    .catch((err) => ({
      error: true,
      message: err.response.data.message,
    }));
};

//visitor123V@ password for sick bay account portal

//register user with credentials
export const registerUser = (credentials) => {
  return axios
    .post(`${baseURL}/auth/register`, credentials)
    .then((res) => ({
      error: false,
      message: res.data.message,
    }))
    .catch((err) => ({
      error: true,
      message: err.response.data.message,
    }));
};

//username and password login function for express
export const login = ({ emailOrUsername, password, storeUser, userType }) => {
  return axios
    .post(`${baseURL}/auth/login`, { emailOrUsername, password })
    .then((response) => {
      //check if user type is portal or express
      if (response.data.user.userType === userType) {
        if (response.data.token && storeUser) {
          localStorage.setItem("express-user", JSON.stringify(response.data));
        }

        return {
          error: false,
          user: response.data,
        };
      } else {
        return {
          error: true,
          message: "User not Found",
        };
      }
    })
    .catch((err) => ({
      error: true,
      message: err.response.data.message,
    }));
};

//username and password portal login function
export const loginPortal = ({
  emailOrUsername,
  password,
  storeUser,
  userType,
}) => {
  return axios
    .post(`${baseURL}/auth/login`, { emailOrUsername, password })
    .then((response) => {
      //check if user type is portal or express
      if (response.data.user.userType === userType) {
        if (response.data.token && storeUser) {
          localStorage.setItem("portal-user", JSON.stringify(response.data));
        }

        return {
          error: false,
          user: response.data,
        };
      } else {
        return {
          error: true,
          message: "User not Found",
        };
      }
    })
    .catch((err) => ({
      error: true,
      message: err.response.data.message,
    }));
};

//forgot password function
export const forgotPassword = async (email) => {
  try {
    const res = await axios.post(`${baseURL}/auth/forgot/password`, email);
    return {
      error: false,
      message: res.data.message,
    };
  } catch (error) {
    return {
      error: true,
      message: error.response.data.message,
    };
  }
};
//reset password function
export const resetPassword = async (email) => {
  try {
    const res = await axios.post(`${baseURL}/auth/password/reset`, email);
    return {
      error: false,
      message: res.data.message,
    };
  } catch (error) {
    return {
      error: true,
      message: error.response.data.message,
    };
  }
};

//express logout
export const logout = () => {
  localStorage.removeItem("express-user");
};
//express logout
export const logoutPortal = () => {
  localStorage.removeItem("portal-user");
};

//get express local stored user
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("express-user"));
};

//get portal local stored user
export const getPortalCurrentUser = () => {
  return JSON.parse(localStorage.getItem("portal-user"));
};
