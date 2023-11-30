import { ActionCreator } from 'redux';
import { ChangeValuteAction } from '../types/currentValuteType';
import { IValute } from '../types/valuteType';

export const currentValuteRequest: ActionCreator<
  ChangeValuteAction
> = (valute: IValute) => ({
  type: 'CHANGE_VALUTE',
  payload: valute,
});
