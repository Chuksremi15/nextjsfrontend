import { GET_CATEGORY_SUCCESS } from "../types";

const initialState = () => ({
  category: {},
  categories: [],
});

const categoryReducer = (state = initialState(), { type, payload }) => {
  switch (type) {
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: payload.response,
      };
    default:
      return state;
  }
};

export default categoryReducer;
