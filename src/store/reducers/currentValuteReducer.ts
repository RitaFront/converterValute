import { Reducer } from 'redux';
import {
  ChangeValuteAction,
  CurrentValuteState,
} from '../types/currentValuteType';

const initialState: CurrentValuteState = {
  valute: null,
};

export const currentValuteReducer: Reducer<
  CurrentValuteState,
  ChangeValuteAction
> = (state = initialState, action): CurrentValuteState => {
  switch (action.type) {
    case 'CHANGE_VALUTE':
      return {
        valute: action.payload,
      };
    default:
      return state;
  }
};
