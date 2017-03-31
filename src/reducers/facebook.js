/* @flow */

type State = {
  fbSdkReady: boolean
};

const initialState = {
  fbSdkReady: false
};

const facebook = (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case 'LOAD_FB_SDK_SUCCESS':
      return Object.assign({ ...state, fbSdkReady: true });
    case 'LOAD_FB_SDK_ERROR':
      return Object.assign({ ...state, fbSdkReady: false });
    default:
      return state;
  }
};

export default facebook;
