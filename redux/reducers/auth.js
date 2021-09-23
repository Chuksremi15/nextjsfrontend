import {
  LOGIN_SUCCESS,
  LOGOUT,
  POST_TOKEN_REFRESH_SUCCESS,
  POST_UPDATE_USER_SUCCESS,
  REGISTER_SUCCESS,
} from "../types";

const initialState = () => ({
  user: {},
  isLoggedIn: false,
});

const authReducer = (state = initialState(), { type, payload }) => {
  switch (type) {
    case LOGOUT:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        isLoggedIn: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        user: payload,
        isLoggedIn: true,
      };

    case POST_UPDATE_USER_SUCCESS:
      state.user.user = payload.updatedUser;
      return {
        ...state,
      };

    case POST_TOKEN_REFRESH_SUCCESS:
      user.token = payload.accessToken;
      user.refreshToken = payload.refreshToken;
      isLoggedIn = true;
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default authReducer;
