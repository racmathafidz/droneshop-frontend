import { combineReducers } from 'redux';

import ProductsReducer from './ProductsReducer';

const reducers = combineReducers({
  ProductsData: ProductsReducer,
});

export default reducers;