import {
  SET_DATA,
  SET_MODE,
  SET_FORM
  //  ADD_FIRST,
  //  ADD_LAST,
  // REMOVE_FIRST,
  // REMOVE_LAST
} from "../actions/appActions";

//import { serverPath } from '../config.js'

const initialState = {
  //serverPath,
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
    // return { ...state, data: [data[] };

    default:
      return state;
  }
}
