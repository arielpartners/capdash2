import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cd-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  agencyTitle = 'DSS';
  appShTitle = 'CapDash';
  appTitle = 'Shelter Capacity & Planning';

  constructor() { }

  ngOnInit() {
  }

}
