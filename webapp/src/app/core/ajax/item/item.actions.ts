import { Injectable } from '@angular/core';
// import { Action } from 'redux';

@Injectable()
export class ItemActions {
  static readonly LOAD_STARTED = 'LOAD_STARTED';
  static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED';
  static readonly LOAD_FAILED = 'LOAD_FAILED';

  loadItem(itemType) {
    return {
      type: ItemActions.LOAD_STARTED,
      meta: { itemType },
    };
  }

  loadSucceeded(itemType, payload) {
    return {
      type: ItemActions.LOAD_SUCCEEDED,
      meta: { itemType },
      payload,
    };
  }

  loadFailed(itemType, error) {
    return {
      type: ItemActions.LOAD_FAILED,
      meta: { itemType },
      error,
    };
  }

  submitForm(itemType, form) {
    return {
      type: ItemActions.LOAD_STARTED,
      meta: { itemType },
      form
    };
  }
}
