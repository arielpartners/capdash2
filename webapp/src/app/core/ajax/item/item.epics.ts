import { Injectable } from '@angular/core';
import { /* Epic, */ createEpicMiddleware } from 'redux-observable';
//import { Action, Store } from 'redux';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ItemType } from './item.types';
import { ItemActions } from './item.actions';
import { ItemService } from './item.service';

@Injectable()
export class ItemEpics {
  constructor(
    private service: ItemService,
    private actions: ItemActions,
  ) {}

  public createEpic(itemType: ItemType) {
    return createEpicMiddleware(this.createLoadItemEpic(itemType));
  }

  private createLoadItemEpic(itemType) {
    return action$ => action$
      .ofType(ItemActions.LOAD_STARTED)
      .filter(({ meta }) => meta.itemType === itemType)
      .switchMap(a => this.service.get(itemType)
        .map(data => this.actions.loadSucceeded(itemType, data))
        .catch(response => of(this.actions.loadFailed(itemType, {
          status: '' + response.status,
        }))));
  }
}