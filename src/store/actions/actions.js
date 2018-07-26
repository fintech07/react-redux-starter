
import * as ACTION_TYPES from './action_types';


// Plain Action
 { type: ACTION_TYPES.SUCCESS }

 { type : ACTION_TYPES.FAILURE }



// Middleware redux thunk action
export function success() {
  return dispatch => {
      dispatch({type: ACTION_TYPES.SUCCESS})
  }
}

export function failure() {
  return dispatch => {
      dispatch({type: ACTION_TYPES.FAILURE})
  }
}
