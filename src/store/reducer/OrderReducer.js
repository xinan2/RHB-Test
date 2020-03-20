import {
  // Order List
  ORDER_LIST_FETCH,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAILURE,
} from '../constant';

export const initialState = {
  loading: false,
  watchlist: {},
  watchlistCounter: [],
  error: ''
};

const orderListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_LIST_FETCH:
      return { ...state, loading: true };
    case ORDER_LIST_SUCCESS:
      return { ...state, data: action.data, loading: false };
    case ORDER_LIST_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default orderListReducer;
