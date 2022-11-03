const Types = {
  GET_USER: "user/GET_USER",
  GET_USER_SUCCESS: "user/GET_USER_SUCCESS",
  GET_USER_ERROR: "user/GET_USER_ERROR",
};

const initialState = {
  user: null,
  error: null,
  isLoading: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Types.GET_USER:
      return { ...state, isLoading: true, user: null, error: null };
    case Types.GET_USER_SUCCESS:
      return { ...state, isLoading: false, user: action.payload.user };
    case Types.GET_USER_ERROR:
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
};

export default reducer;
