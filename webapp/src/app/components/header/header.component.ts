import { Component, OnInit } from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../store/root.types';

@Component({
  selector: 'cd-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {}

  logout(e) {
    localStorage.clear();
    this.toggleRadio(undefined);
    this.ngRedux.dispatch({type: 'logged-out'});

  }

  toggleRadio(e) {
    const radioBtn = e ? e.target : undefined,
        radioButtons = document.getElementsByName('header');

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
