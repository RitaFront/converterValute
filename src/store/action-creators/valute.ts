import { Action, ActionCreator } from 'redux';
import {
  IValute,
  ValuteActionTypes,
  ValuteIsFavoriteAction,
  ValuteRequestAction,
  ValuteRequestErrorAction,
  ValuteRequestSuccessAction,
} from '../types/valuteType';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import axios from 'axios';
import { checkLocalStorage } from '../../utils';

export const valuteRequest: ActionCreator<
  ValuteRequestAction
> = () => ({
  type: ValuteActionTypes.VALUTE_REQUEST,
});

export const valuteRequestSuccess: ActionCreator<
  ValuteRequestSuccessAction
> = (data: IValute[]) => ({
  type: ValuteActionTypes.VALUTE_REQUEST_SUCCESS,
  payload: data,
});

export const valuteRequestError: ActionCreator<
  ValuteRequestErrorAction
> = (error: Error) => ({
  type: ValuteActionTypes.VALUTE_REQUEST_ERROR,
  payload: String(error),
});

export const valuteIsFavorite: ActionCreator<
  ValuteIsFavoriteAction
> = (id: string) => ({
  type: ValuteActionTypes.VALUTE_IS_FAVORITE,
  payload: id,
});

export const valuteRequestAsync =
  (): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch) => {
    dispatch(valuteRequest());
    axios
      .get('https://www.cbr-xml-daily.ru/daily_json.js')
      .then((res) => {
        const valute = res.data.Valute;
        const valuteArr = Object.keys(valute).map((key) => ({
          isFavorite: checkLocalStorage(valute[key].ID),
          ...valute[key],
        }));
        dispatch(valuteRequestSuccess(valuteArr));
      })
      .catch((err) => {
        dispatch(valuteRequestError(err));
      });
  };
