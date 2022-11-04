
const Types = {
  SET_USER: "user/SET_USER",
  LOGOUT: "user/LOGOT"
};

const initialState = {
  userName: null,
  avatar: 'https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg'
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Types.SET_USER: {
      return { ...state, userName: action.payload };
    }
    case Types.LOGOUT: {
      return {...state, userName: action.payload}
    }
    default:
      return state;
  }
};
export const setUserState = (payload: string) => ({
  type: Types.SET_USER,
  payload
})

export const logout = () => ({
  type: Types.SET_USER,
  payload: ''
})

export default reducer;
