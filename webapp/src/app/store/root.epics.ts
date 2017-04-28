import { Injectable } from '@angular/core';
//import { combineEpics } from 'redux-observable';

import { ITEM_TYPES } from '../core/ajax/item/item.types';
import { ItemEpics } from '../core/ajax/item/item.epics';

@Injectable()
export class RootEpics {
  constructor(private itemEpics: ItemEpics) {}

  public createEpics() {
    return [
      this.itemEpics.createEpic(ITEM_TYPES.INFO),
      this.itemEpics.createEpic(ITEM_TYPES.USER),
    ];
  }
}
