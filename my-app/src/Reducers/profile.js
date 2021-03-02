import {Types} from '../Actions/actionTypes';

const initialState = {
	profile: {},
	formSubmitted: false
}

const reducer = (state = initialState, action) => {
  let nextState;

  switch (action.type) {
    case Types.LOGIN:
      console.log('login', action);
      nextState = {
        ...state,
        profile: action.payload.user,
        formSubmitted: false // after update user formsubmition reset
      }

      return nextState;

    case Types.ADD_USER:
      const profile = {username: action.value.username,
                  id: action.value.id,
                  email: action.value.email,
                  roles: action.value.roles,
                  accessToken: action.value.accessToken};

      nextState = {
        ...state,
        profile: profile,
        formSubmitted: false
      };

      return nextState;

    default:
      return state;
  }
}

export default reducer;  