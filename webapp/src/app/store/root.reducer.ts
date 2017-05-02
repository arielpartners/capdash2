import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';

import { token } from '../reducers/token.reducer';
import { createItemReducer } from '../core/ajax/item/item.reducer';
import { ITEM_TYPES } from '../core/ajax/item/item.types';

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    info: createItemReducer(ITEM_TYPES.INFO),
    user: createItemReducer(ITEM_TYPES.USER),
    router: routerReducer,
    token
}));
