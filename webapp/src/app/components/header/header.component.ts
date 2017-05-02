import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cd-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  clearStorage(e) {
    localStorage.clear();
    this.toggleRadio(undefined);
  }

  toggleRadio(e) {
    let radioBtn = e ? e.target : undefined,
        radioButtons = document.getElementsByName("header");

    Array.prototype.forEach.call(radioButtons, dropdown => {
      if (dropdown !== radioBtn) {
        dropdown.canClear = false;
        dropdown.checked = false;
      }
    });

    if (radioBtn) {
      if (!radioBtn.canClear) {
        radioBtn.canClear = true;
        e.target.checked = true;
      } else {
        e.target.checked = false;
        radioBtn.canClear = false;
      }
    }

  }
}
