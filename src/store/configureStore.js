import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { loadState, saveState } from "../localStorage";

//export const store = createStore(appReducer, applyMiddleware(thunk, logger));
/*export const store = createStore(
  appReducer,
  applyMiddleware(thunk, logger) //,
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);*/

const persistedState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk, logger))
);

/*
const persistedState = loadState();
const store = createStore(
  app,
  persistedState
);
store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  });
});
*/
store.subscribe(() => {
  saveState(store.getState());
});
