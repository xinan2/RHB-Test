import { combineReducers } from 'redux';
import orderListReducer from './OrderReducer';

export default combineReducers({
  orderList: orderListReducer,
});