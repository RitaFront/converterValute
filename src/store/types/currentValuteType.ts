import { IValute } from './valuteType';

export interface CurrentValuteState {
  valute: IValute | null;
}

export interface ChangeValuteAction {
  type: 'CHANGE_VALUTE';
  payload: IValute;
}
