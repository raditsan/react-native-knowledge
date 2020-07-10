import {DECREMENT, INCREMENT} from '../ActionType';

const initialState = 0;
export default function incrementReducer(state = initialState, actions) {
  if (actions.type === INCREMENT) {
    return state + 1;
  } else if (actions.type === DECREMENT) {
    return state - 1;
  }
  return initialState;
}
