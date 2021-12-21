import { ADD_PRODUCTS_DATA } from '../type';

export const AddProductsDataAction = (payload) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCTS_DATA,
    payload,
  });
};