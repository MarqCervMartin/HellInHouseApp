import {CHILLI_CHANGE} from '../constants';

const initialState = {
  chilli: '',
};

const chilliReducer = (
  state = initialState,
  action: Record<string, string>,
) => {
  switch (action.type) {
    case CHILLI_CHANGE:
      return {
        ...state,
        chilli: action.payload,
      };
    default:
      return state;
  }
};
export default chilliReducer;
