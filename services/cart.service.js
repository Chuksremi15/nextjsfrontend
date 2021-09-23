import axios from "axios";
import { baseURL } from "../constants/api";

//function that gets single product from the database
export const getProduct = (id) => {
  return axios.get(`${baseURL}/product/${id}`);
};

//Get user cart
export const getCart = (token) => {
  return axios
    .get(`${baseURL}/cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => ({
      error: false,
      data: res.data.cart,
    }))
    .catch((err) => ({
      error: true,
      message: err.response.data.message,
    }));
};
//Add to cart
export const addCart = (items, token) => {
  return axios
    .post(`${baseURL}/cart/add`, items, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err, err.response.data.message);
    });
};
