import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {NgRedux} from '@angular-redux/store';
import {Router} from "@angular/router";

import {IAppState} from '../../store/root.types';
import {ITEM_TYPES} from '../../core/ajax/item/item.types';
import {ItemActions} from '../../core/ajax/item/item.actions';

@Component({
  selector: 'cd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit{

  // We are going to declare our variables here. We’ll have a loginForm that will represent our reactive form, an authenticated boolean that will be true or false based on the users auth status and finally a profile object that will hold the user data.
  loginForm : FormGroup;
  store: NgRedux<IAppState>;
  //user : Object;

  constructor(fb: FormBuilder,
              ngRedux: NgRedux<IAppState>,
              private ngRouter:Router,
              private actions: ItemActions) {

    // For our form, we’ll just have two fields and we’ll require both of them to be filled out before the form can be submitted
    this.loginForm = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required],
    });

    this.store = ngRedux;
  }

  ngOnInit() {
    // We’ll check if the user is logged in once this component is loaded. We’ll do this by checking if a jwt key value pair exists in local storage.
    const token = JSON.parse(localStorage.getItem('reduxPersist:token'));
    const loginUrl = '/login';
    if (token && window.location.pathname === loginUrl) {
      this.ngRouter.navigate(['']);
    }
  }

  submitForm(value: any) {
    // Once the form is submitted and we get the users email and password we’ll format our request based on the Auth0 API.
    let form = {
      'auth': {
        'email': value.email,
        'password': value.password,
      }
    };

    this.store.dispatch(this.actions.submitForm(ITEM_TYPES.TOKEN, form));
  }

}
