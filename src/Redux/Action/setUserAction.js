import {USERDATA} from '../ActionType';

export default function setUserAction(data) {
  return {
    type: USERDATA,
    userData: data,
  };
}
