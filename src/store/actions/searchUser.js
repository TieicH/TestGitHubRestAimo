import * as actionType from './type';
import axios from '../../axios';
import NProgress from 'nprogress';

const searchUserSuccess = (users) => ({
  type: actionType.SEARCH_SUCCESS,
  users: users,
});

const searchUserLoading = () => ({
  type: actionType.SEARCH_LOADING,
});

const searchUserFailed = (error) => ({
  type: actionType.SEARCH_FAILED,
  error: error,
});

export const closeSearchUser = () => ({
  type: actionType.CLOSE_SEARCH_RESULT,
});

export const disableSearchInput = () => ({
  type: actionType.DISABLE_SEARCH_INPUT,
});

export const enableSearchInput = () => ({
  type: actionType.ENABLE_SEARCH_INPUT,
});

export const asyncSearchUsers = (userText) => {
  return (dispatch) => {
    if (userText === '') {
      dispatch(closeSearchUser());
      return;
    }
    dispatch(searchUserLoading());
    NProgress.start();
    axios
      .get(`search/users?q=${userText}&per_page=5`)
      .then((response) => {
        const data = response.data.items;
        if (data.length) {
          dispatch(searchUserSuccess(data));
        } else {
          dispatch(searchUserSuccess([{ id: 0, login: "There's no results", notFound: true }]));
        }
        NProgress.done();
      })
      .catch((error) => {
        dispatch(searchUserFailed(error));
        NProgress.done();
      });
  };
};
