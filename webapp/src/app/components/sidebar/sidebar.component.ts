import { Component, OnInit, Input, ChangeDetectionStrategy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'cd-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  @Input() version: Observable<any>;
  @Input() loading: Observable<boolean>;
  @Input() error: Observable<any>;
  agencyTitle = 'DSS';
  appShTitle = 'CapDash';
  appTitle = 'Shelter Capacity & Planning';

  expandedMenu = 'dashboard';
  sidebarMinimized = false;

  constructor() { }

  ngOnInit() {
    console.log('version', this.version);
  }

}
