import { combineReducers } from 'redux';
import MinimumSpendValue from './minimum_reducer';
import MaximumSpendValue from './maximum_reducer'

const rootReducer = combineReducers({
    MinimumSpendValue,
    MaximumSpendValue
});

export default rootReducer;