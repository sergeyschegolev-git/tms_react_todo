import { handleActions } from 'redux-actions';
import { toggleDataProcessing } from '../actions/dataProcessingActions';

export const dataProcessingReducer = handleActions({
  [toggleDataProcessing]: (state, action) => action.payload
}, false)