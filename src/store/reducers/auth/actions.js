export function authenticate(data) {
  return {
    type: '@auth/AUTHENTICATE',
    payload: data
  };
}

export function logout() {
  return {
    type: '@user/LOGOUT'
  };
}
