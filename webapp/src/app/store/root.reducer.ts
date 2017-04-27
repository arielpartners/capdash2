import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';

import { createItemReducer } from '../core/ajax/item/item.reducer';
import { ITEM_TYPES } from '../core/ajax/item/item.types';

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    item: createItemReducer(ITEM_TYPES.INFO),
    lions: createItemReducer(ITEM_TYPES.USER),
    router: routerReducer,
}));
