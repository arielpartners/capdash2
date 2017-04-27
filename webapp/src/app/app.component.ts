import {Component, ChangeDetectionStrategy} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

import {IAppState} from './store/root.types';
import {ITEM_TYPES} from './core/ajax/item/item.types';
import {ItemActions} from './core/ajax/item/item.actions';

@Component({
  selector: 'cd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'cd works!';
  @select(['info', 'item', 'version']) readonly version$: Observable<any>;
  @select(['info', 'loading']) readonly loading$: Observable<boolean>;
  @select(['info', 'error']) readonly error$: Observable<any>;

  constructor(
    ngRedux: NgRedux<IAppState>,
    actions: ItemActions) {
    ngRedux.dispatch(actions.loadItem(ITEM_TYPES.INFO));
  }
}
