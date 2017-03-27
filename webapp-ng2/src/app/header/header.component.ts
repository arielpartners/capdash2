import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cd-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  onStore() {
    console.log('storing');
  }

  onFetch() {
    console.log('fetching');
  }
}
