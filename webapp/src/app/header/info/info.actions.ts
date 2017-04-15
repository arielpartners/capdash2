import { Injectable } from '@angular/core';
//import { Action } from 'redux';

@Injectable()
export class InfoActions {
    static LOAD_SUCCEEDED = 'LOAD_SUCCEEDED(INFO)';
    static LOAD_FAILED = 'LOAD_SUCCEEDED(INFO)';

    loadSucceeded(payload) {
        return {
            type: InfoActions.LOAD_SUCCEEDED,
            payload,
        };
    }

    loadFailed(error) {
        return {
            type: InfoActions.LOAD_FAILED,
            error,
        };
    }
}