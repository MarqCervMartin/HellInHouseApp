import {CHILLI_CHANGE} from '../constants';

export function changeChilli(chilli: string) {
  return {
    type: CHILLI_CHANGE,
    payload: chilli,
  };
}
