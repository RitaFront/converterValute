export interface IValute {
  CharCode: string;
  ID: string;
  Name: string;
  Nominal: number;
  Value: number;
  isFavorite: boolean;
}

export interface ValuteState {
  data: IValute[];
  loading: boolean;
  error: string;
}

export enum ValuteActionTypes {
  VALUTE_REQUEST = 'VALUTE_REQUEST',
  VALUTE_REQUEST_SUCCESS = 'VALUTE_REQUEST_SUCCESS',
  VALUTE_REQUEST_ERROR = 'VALUTE_REQUEST_ERROR',
  VALUTE_IS_FAVORITE = 'VALUTE_IS_FAVORITE',
}

export interface ValuteRequestAction {
  type: ValuteActionTypes.VALUTE_REQUEST;
}

export interface ValuteRequestSuccessAction {
  type: ValuteActionTypes.VALUTE_REQUEST_SUCCESS;
  payload: IValute[];
}

export interface ValuteRequestErrorAction {
  type: ValuteActionTypes.VALUTE_REQUEST_ERROR;
  payload: string;
}

export interface ValuteIsFavoriteAction {
  type: ValuteActionTypes.VALUTE_IS_FAVORITE;
  payload: string;
}

export type ValuteAction =
  | ValuteRequestAction
  | ValuteRequestSuccessAction
  | ValuteRequestErrorAction
  | ValuteIsFavoriteAction;
