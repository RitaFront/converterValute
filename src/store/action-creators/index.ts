import * as ValuteActionCrators from './valute';
import * as CurrentValuteActionCreators from './currentValute';

export const ActionCrators = {
  ...ValuteActionCrators,
  ...CurrentValuteActionCreators,
};
