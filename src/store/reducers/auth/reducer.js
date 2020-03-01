const INITIAL_STATE = {
  token: null,
  isSigned: false
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@auth/AUTHENTICATE':
      const { token } = action.payload;
      return { isSigned: true, token };
    case '@user/LOGOUT':
      return state;
    default:
      return state;
  }
};

export default authReducer;
