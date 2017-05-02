import { ITEM_TYPES, ItemType } from '../core/ajax/item/item.types';
import {ItemActions} from '../core/ajax/item/item.actions';
//-------------------------------------------------------------------
// TOKEN STORE
//-------------------------------------------------------------------
/* eslint-disable indent, complexity */
export const token = (state = null, {type, payload}) => {
  switch (type) {

    case ItemActions.LOAD_SUCCEEDED:
      if(payload.jwt) {
        return payload.jwt;
      } else {
        return state;
      }

    default:
      return state;
  }
};
