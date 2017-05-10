import {Injectable} from '@angular/core';
import {/* Epic, */ createEpicMiddleware} from 'redux-observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {ItemType} from './item.types';
import {ItemActions} from './item.actions';
import {ItemService} from './item.service';


@Injectable()
export class ItemEpics {
  constructor(private service: ItemService,
              private actions: ItemActions,
  ) {
  }

  /**
   *
   * @param {string} itemType
   * @returns {EpicMiddleware<any|any, S>}
   */
  public createEpic(itemType: ItemType) {
    return createEpicMiddleware(this.createLoadItemEpic(itemType));
  }

  /**
   *
   * @param props - see params passed to simpleEpic
   * @returns {EpicMiddleware<T, S>}
   */
  public createSimpleEpic(props) {
    return createEpicMiddleware(this.simpleEpic(props));
  }

  /**
   *
   * @param {(action$:any)=>Observable<R>} action - The action/observable to output
   * @param {string} [filter] - Optional property to filter on (if property exists return true)
   * @param {(action$:any)=>Observable<R>} trigger - The input action/observable
   * @returns {(action$:any)=>Observable<R>} - Returns action if not filtered
   */
  private simpleEpic({action, filter, trigger}) {
    return action$ => action$
      .ofType(trigger)
      .filter(({payload}) => {
        if (filter) {
          return !!payload[filter];
        } else {
          return true;
        }

      })
      .map(() => action);
  }

  /**
   *
   * @param {string} itemType
   * @returns {(action$:any)=>Observable<R|T>}
   */
  private createLoadItemEpic(itemType) {
    return action$ => action$
      .ofType(ItemActions.LOAD_STARTED)
      .filter(({meta}) => meta.itemType === itemType)
      .switchMap(
        ({form}) => form ?
          this.service.post(itemType, form)
            .map(data => this.actions.loadSucceeded(itemType, data))
          :
          this.service.get(itemType)
            .map(data => this.actions.loadSucceeded(itemType, data))
      )
      .catch(response => of(this.actions.loadFailed(itemType, {
        status: '' + response.status,
      })));
  }
}
