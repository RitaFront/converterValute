import { combineReducers } from 'redux';
import { valuteReducer } from './valuteReducer';
import { currentValuteReducer } from './currentValuteReducer';

export const rootReducer = combineReducers({
  valute: valuteReducer,
  currentValute: currentValuteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
