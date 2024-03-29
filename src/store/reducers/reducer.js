import * as ACTION_TYPES from '../actions/action_types';

const initialState = {
  stateprop: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SUCCESS:
      return  {
        ...state,
        stateprop: true
      }
    case ACTION_TYPES.FAILURE:
      return {
        ...state,
        stateprop: false
      }
    default:
      return state
    }
}

export default rootReducer;
