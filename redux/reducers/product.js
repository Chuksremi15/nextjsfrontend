import {
  GET_CAT_PRODUCTS_SUCCESS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_SUCCESS,
} from "../types";

const initialState = () => ({
  product: {},
  products: [],
});

const productReducer = (state = initialState(), { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload.response,
      };

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: payload.response,
      };

    case GET_CAT_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload.response,
      };
    default:
      return state;
  }
};

export default productReducer;
