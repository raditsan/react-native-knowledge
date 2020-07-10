import {DECREMENT, INCREMENT} from '../ActionType';

function increment() {
  return {
    type: INCREMENT,
  };
}

function decrement() {
  return {
    type: DECREMENT,
  };
}

export {increment, decrement};
