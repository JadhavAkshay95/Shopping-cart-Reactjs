import { GET_PRODUCT, ADD_TO_CART } from "./constant";

export const getProduct = () => ({
  type: GET_PRODUCT,
});

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});
