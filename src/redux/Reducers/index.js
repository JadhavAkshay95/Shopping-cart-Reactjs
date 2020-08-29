import productList from "../../data.js/product";
import { ADD_TO_CART, GET_PRODUCT } from "../Actions/constant";

const rootReducer = (state = productList, action) => {
  debugger;
  switch (action.type) {
    case GET_PRODUCT:
      return state;

    case ADD_TO_CART:
      return [...state].map((item) => {
        if (item.id === action.payload) {
          item.addToCart = true;
        }
        return item;
      });

    default:
      return state;
  }
};

export default rootReducer;
