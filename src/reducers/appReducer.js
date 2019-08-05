import { SET_DATA, SET_MODE, SET_FORM } from "../actions/appActions";

const initialState = {
  mode: "list",
  data: [],
  form: {}
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    case SET_MODE:
      return { ...state, mode: action.payload };
    case SET_FORM:
      return { ...state, form: action.payload };

    default:
      return state;
  }
}
