import {
  REPO_LIST_FETCH,
  REPO_LIST_SUCCESS,
  REPO_LIST_FAILURE,
} from '../constant';

export const initialState = {
  loading: false,
  repoItem: [],
  totalCount: null,
  error: '',
};

const repoReducer = (state = initialState, action) => {
  switch (action.type) {
    case REPO_LIST_FETCH:
      return { ...state, loading: true };
    case REPO_LIST_SUCCESS:
      return { ...state, repoItem: action.data.items, totalCount: action.data.total_count, loading: false };
    case REPO_LIST_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default repoReducer;
