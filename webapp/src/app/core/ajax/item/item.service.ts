import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ITEM_TYPES, ItemType } from './item.types';

// A fake API on the internets.
const URLS = {
  [ITEM_TYPES.INFO]: '/api/info', // 'http://www.mocky.io/v2/588d70ad100000e50f2d2983',
  [ITEM_TYPES.USER]: '/api/user', // 'http://www.mocky.io/v2/588d702d100000d50f2d2980',
};

@Injectable()
export class ItemService {
  constructor(private http: Http) {}

  get(itemType: ItemType) {
    return this.http.get(URLS[itemType])
      .map(resp => resp.json());
  }

}
