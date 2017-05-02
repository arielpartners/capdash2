import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ITEM_TYPES, ItemType } from './item.types';

// A fake API on the internets.
const URLS = {
  [ITEM_TYPES.INFO]: '/api/info',
  [ITEM_TYPES.TOKEN]: '/api/user_token',
  [ITEM_TYPES.USER]: '/api/user',
};

@Injectable()
export class ItemService {
  constructor(private http: Http) {}

  get(itemType: ItemType) {
    return this.http.get(URLS[itemType])
      .map(resp => resp.json());
  }

  post(itemType: ItemType, form: Object) {
    return this.http.post(URLS[itemType], form)
      .map(
        resp =>
          resp.json()
      );
  }

}
