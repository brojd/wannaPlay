import { loadFbSdkSuccess, loadFbSdkError } from '../actions/facebook';
import { updateCurrentUser } from '../actions/user';
import loadFbSdk from '../helpers/loadFbSdk';

export const injectFbSdk = (): Function => {
  return (dispatch): void => {
    loadFbSdk()
      .then(
        () => dispatch(loadFbSdkSuccess()),
        () => dispatch(loadFbSdkError())
      )
  }
};

export const saveUserInfo = (): Function => {
  return (dispatch): void => {
    window.FB.api(
      '/me?fields=id,first_name,last_name,gender,location,link',
      (user) => dispatch(updateCurrentUser(user))
    )
  }
};