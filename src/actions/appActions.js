export const SET_DATA = "SET_DATA";
export const SET_MODE = "SET_MODE";
export const SET_FORM = "SET_FORM";

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
