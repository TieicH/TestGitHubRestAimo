import * as actionType from './type';
import axios from 'axios';
import NProgress from 'nprogress';

const userDataSuccess = (userData) => ({
  type: actionType.USER_DATA_SUCCESS,
  userData: userData,
});

const userDataLoading = () => ({
  type: actionType.USER_DATA_LOADING,
});

const userDataFailed = (error) => ({
  type: actionType.USER_DATA_FAILED,
  error: error,
});

export const asyncUserData = (data) => {
  const UserRequests = Object.keys(data).map((url) => {
    return axios.get(data[url]);
  });
  return (dispatch) => {
    dispatch(userDataLoading);
    NProgress.start();
    return Promise.all(UserRequests)
      .then((response) => {
        const parsedData = response.reduce((userData, response, indice) => {
          return { ...userData, [Object.keys(data)[indice]]: response.data };
        }, {});
        dispatch(userDataSuccess(parsedData));
        NProgress.done();
        return { success: true };
      })
      .catch((error) => {
        dispatch(userDataFailed(error));
        NProgress.done();
        return { success: false };
      });
  };
};
