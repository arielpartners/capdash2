import {Injectable} from '@angular/core';

import {ITEM_TYPES} from '../core/ajax/item/item.types';
import {ItemActions} from '../core/ajax/item/item.actions';
import {ItemEpics} from '../core/ajax/item/item.epics';

@Injectable()
export class RootEpics {
  constructor(private itemEpics: ItemEpics) {
  }

  public createEpics() {
    return [
      this.itemEpics.createEpic(ITEM_TYPES.INFO),
      this.itemEpics.createEpic(ITEM_TYPES.TOKEN),
      this.itemEpics.createEpic(ITEM_TYPES.USER),
      this.itemEpics.createSimpleEpic({
        action: {
          type: '@angular-redux/router::UPDATE_LOCATION',
          payload: '/'
        },
        filter: 'jwt',
        trigger: ItemActions.LOAD_SUCCEEDED
      }),
    ];
  }
}
