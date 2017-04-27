//import { Observable } from 'rxjs/Observable';
import {Component} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

import {IAppState} from './store/root.types';
import {ITEM_TYPES} from './core/ajax/item/item.types';
import {ItemActions} from './core/ajax/item/item.actions';

@Component({
  selector: 'cd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'cd works!';

  constructor(
    ngRedux: NgRedux<IAppState>,
    actions: ItemActions) {
    ngRedux.dispatch(actions.loadItem(ITEM_TYPES.INFO));
  }
}
