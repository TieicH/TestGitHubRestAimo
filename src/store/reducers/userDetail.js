import * as actionTypes from '../actions/type';

const initialState = {
  userData: [],
  userDataLoading: false,
  userDataFailed: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_DATA_LOADING:
      return {
        ...state,
        userData: [],
        userDataLoading: true,
        userDataFailed: undefined,
      };
    case actionTypes.USER_DATA_SUCCESS:
      return {
        ...state,
        userData: action.userData,
        userDataLoading: false,
        userDataFailed: undefined,
      };
    case actionTypes.USER_DATA_FAILED:
      return {
        ...state,
        userData: [],
        userDataLoading: false,
        userDataFailed: action.error,
      };
  }
  return state;
};

export default reducer;
