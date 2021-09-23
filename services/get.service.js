import { baseURL } from "../constants/api";

//function that gets all categories from baseUrl
export const fetchCategory = async () => {
  const response = await fetch(`${baseURL}/category`);
  const data = await response.json();
  return data;
};
//function that fetch products
export const fetchProduct = async (id) => {
  const response = await fetch(`${baseURL}/product/${id}`);
  const data = await response.json();

  return data;
};
