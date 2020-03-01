const INITIAL_STATE = {
  profile: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@user/SET_PROFILE':
      const { user: profile } = action.payload;
      return { profile };
    case '@user/SIGN_OUT':
      return state;
    default:
      return state;
  }
};

export default userReducer;
