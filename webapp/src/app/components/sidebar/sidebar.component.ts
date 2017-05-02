import { AfterViewInit, Component, Input, ChangeDetectionStrategy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {NgRedux} from '@angular-redux/store';

import {IAppState} from '../../store/root.types';
import {ITEM_TYPES} from '../../core/ajax/item/item.types';
import {ItemActions} from '../../core/ajax/item/item.actions';

@Component({
  selector: 'cd-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements AfterViewInit {
  @Input() version:  Observable<string>;
  @Input() loading: Observable<boolean>;
  @Input() error: Observable<any>;
  agencyTitle = 'DSS';
  appShTitle = 'CapDash';
  appTitle = 'Shelter Capacity & Planning';

  expandedMenu = 'dashboard';
  sidebarMinimized = false;

  constructor(private ngRedux: NgRedux<IAppState>,
              private actions: ItemActions) { }

  ngAfterViewInit() {
    this.ngRedux.dispatch(this.actions.loadItem(ITEM_TYPES.INFO));
  }

}
