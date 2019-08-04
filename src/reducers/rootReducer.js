import { combineReducers } from "redux";
import { appReducer } from "./appReducer";

//import { LOG_OUT } from '../actions/BaseActions'
//import { clearState } from '../localStorage'

const baseReducer = combineReducers({
  app: appReducer
});

export const rootReducer = (state, action) => {
  /*if (action.type === LOG_OUT) {
    // for all keys defined in your persistConfig(s)
    ////storage.removeItem('persist:root')
    clearState()

    state = undefined
    console.log('!!!logOut')
  }*/
  return baseReducer(state, action);
};
