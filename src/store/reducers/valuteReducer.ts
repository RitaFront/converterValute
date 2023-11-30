import { Reducer } from 'redux';
import {
  ValuteAction,
  ValuteActionTypes,
  ValuteState,
} from '../types/valuteType';
import { addLocalStorage, removeLocalStorage } from '../../utils';

const initialState: ValuteState = {
  data: [],
  loading: false,
  error: '',
};

export const valuteReducer: Reducer<ValuteState, ValuteAction> = (
  state = initialState,
  action
): ValuteState => {
  switch (action.type) {
    case ValuteActionTypes.VALUTE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ValuteActionTypes.VALUTE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ValuteActionTypes.VALUTE_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ValuteActionTypes.VALUTE_IS_FAVORITE:
      return {
        ...state,
        data: state.data.map((el) => {
          const index = state.data.findIndex(
            (v) => v.ID === action.payload
          );
          if (el.ID === state.data[index]?.ID) {
            el.isFavorite = !el.isFavorite;
            el.isFavorite
              ? addLocalStorage(el.ID)
              : removeLocalStorage(el.ID);
          }
          return el;
        }),
      };
    default:
      return state;
  }
};
