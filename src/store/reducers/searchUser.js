import * as actionTypes from '../actions/type';

const initialState = {
  users: [],
  searchUsersLoading: true,
  searchUsersError: undefined,
  showResults: false,
  enableInputSearch: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_LOADING:
      return {
        ...state,
        users: [],
        searchUsersError: undefined,
        searchUsersLoading: true,
        showResults: false,
        enableInputSearch: false,
      };
    case actionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        users: action.users,
        searchUsersError: undefined,
        searchUsersLoading: false,
        showResults: true,
        enableInputSearch: true,
      };
    case actionTypes.SEARCH_FAILED:
      return {
        ...state,
        users: [],
        searchUsersError: action.error,
        searchUsersLoading: false,
        showResults: true,
        enableInputSearch: true,
      };
    case actionTypes.CLOSE_SEARCH_RESULT:
      return {
        ...state,
        showResults: false,
      };
    case actionTypes.DISABLE_SEARCH_INPUT:
      return {
        ...state,
        enableInputSearch: false,
      };
    case actionTypes.ENABLE_SEARCH_INPUT:
      return {
        ...state,
        enableInputSearch: true,
      };
  }
  return state;
};

export default reducer;
