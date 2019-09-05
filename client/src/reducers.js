import { USER_CHANGE } from "./actions";

const initialState = {
  user: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_CHANGE:
      return {
        user: action.payload.data
      };
    default:
      return state;
  }
}

export default reducer;
