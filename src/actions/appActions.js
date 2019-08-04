export const SET_DATA = "SET_DATA";
export const SET_MODE = "SET_MODE";
export const SET_FORM = "SET_FORM";
/*export const ADD_FIRST = "ADD_FIRST";
export const ADD_LAST = "ADD_LAST";
export const REMOVE_FIRST = "REMOVE_FIRST";
export const REMOVE_LAST = "REMOVE_LAST";*/

export function setData(value) {
  return dispatch => {
    dispatch({
      type: SET_DATA,
      payload: value
    });
  };
}

export function setMode(value) {
  return dispatch => {
    dispatch({
      type: SET_MODE,
      payload: value
    });
  };
}

export function setForm(value) {
  return dispatch => {
    dispatch({
      type: SET_FORM,
      payload: value
    });
  };
}

/*export function addFirst(value) {
  return dispatch => {
    dispatch({
      type: ADD_FIRST,
      payload: value
    });
  };
}

export function addLast(value) {
  return dispatch => {
    dispatch({
      type: ADD_LAST,
      payload: value
    });
  };
}

export function removeFirst(value) {
  return dispatch => {
    dispatch({
      type: REMOVE_FIRST,
      payload: value
    });
  };
}

export function removeLast(value) {
  return dispatch => {
    dispatch({
      type: REMOVE_LAST,
      payload: value
    });
  };
}*/

/*export function setMode(value) {
  return dispatch => {
    dispatch({
      type: ADD_FIRST,
      payload: value,
    })
  }
}
*/
