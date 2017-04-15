import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable';
import { Action } from 'redux';
import { AppActions } from '../../app.actions';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { InfoService } from './info.service';
import { InfoActions } from './info.actions';

@Injectable()
export class InfoEpics {
    epics: Epic<Action>[];

    constructor(
        private service: InfoService,
        private actions: InfoActions
    ) {
        this.epics = [ this.loadInfo ];
    }

    loadInfo = action$ => action$
        .ofType(AppActions.LOAD_DATA)
        .switchMap(a => this.service.getAll()
            .map(data => this.actions.loadSucceeded(data))
            .catch(err => of(this.actions.loadFailed(err))));
}