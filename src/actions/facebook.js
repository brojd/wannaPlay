/* @flow */

const LOAD_FB_SDK_SUCCESS: string = 'LOAD_FB_SDK_SUCCESS';
export const loadFbSdkSuccess = (): Object => {
  return {
    type: LOAD_FB_SDK_SUCCESS
  }
};

const LOAD_FB_SDK_ERROR: string = 'LOAD_FB_SDK_ERROR';
export const loadFbSdkError = (): Object => {
  return {
    type: LOAD_FB_SDK_ERROR
  }
};