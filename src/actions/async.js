import { loadFbSdkSuccess, loadFbSdkError } from '../actions/facebook';
import loadFbSdk from '../helpers/loadFbSdk';

export const injectFbSdk = (): Function => {
  return (dispatch): void => {
    loadFbSdk()
      .then(
        () => dispatch(loadFbSdkSuccess()),
        () => dispatch(loadFbSdkError)
      )
  }
};