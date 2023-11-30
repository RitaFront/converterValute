import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCrators } from '../store/action-creators';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCrators, dispatch);
};
