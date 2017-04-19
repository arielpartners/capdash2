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

  toggleRadio(e) {
    let radio = e.target;
    if (!radio.canClear) {
      radio.canClear = true;
      e.target.checked = true;
    } else {
      e.target.checked = false;
      radio.canClear = false;
    }
  }

  onStore() {
    console.log('storing');
  }

  onFetch() {
    console.log('fetching');
  }
}
