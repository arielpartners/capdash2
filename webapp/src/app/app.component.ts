import {Component, ChangeDetectionStrategy, AfterViewInit} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

import {Router} from '@angular/router';

@Component({
  selector: 'cd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  title = 'cd works!';
  @select(['router']) readonly route$: Observable<string>;
  @select(['token']) readonly token$: Observable<string>;
  @select(['info', 'item', 'version']) readonly version$: Observable<string>;
  @select(['info', 'loading']) readonly loading$: Observable<boolean>;
  @select(['info', 'error']) readonly error$: Observable<any>;

  constructor(private ngRouter: Router) { }

  ngAfterViewInit() {
    const token = JSON.parse(localStorage.getItem('reduxPersist:token'));
    const loginUrl = 'login';
    if (!token && window.location.pathname !== loginUrl) {
      this.ngRouter.navigate([loginUrl]);
    }

  }
}
