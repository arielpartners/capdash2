import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cd-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  agencyTitle = 'DSS';
  appShTitle = 'CapDash';
  appTitle = 'Shelter Capacity & Planning';

  expandedMenu = 'dashboard';
  sidebarMinimized = false;

  constructor() { }

  ngOnInit() {
  }

}
