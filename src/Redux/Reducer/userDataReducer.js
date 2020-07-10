import {USERDATA} from '../ActionType';

const initialData = {};
export default function userDataReducer(state = initialData, action) {
  if (action.type === USERDATA) {
    return action.userData;
  }
  return initialData;
}
