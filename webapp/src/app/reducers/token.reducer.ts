import { ITEM_TYPES, ItemType } from '../core/ajax/item/item.types';
import {ItemActions} from '../core/ajax/item/item.actions';
// -------------------------------------------------------------------
// TOKEN STORE
// -------------------------------------------------------------------
/* eslint-disable indent */
export const token = (state = null, {type, payload}) => {
  let jwt;
  switch (type) {

    case ItemActions.LOAD_SUCCEEDED:
      if (payload.jwt) {
        jwt = payload.jwt;
      } else {
        jwt = state;
      }
      break;

    case 'logged-out':
      jwt = null;
      break;

    default:
      jwt = state;
  }

  return jwt;
};
