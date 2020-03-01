export function setUserProfile(data) {
  return {
    type: '@user/SET_PROFILE',
    payload: data
  };
}

export function userDisconnect() {
  return {
    type: '@user/SIGN_OUT'
  };
}
