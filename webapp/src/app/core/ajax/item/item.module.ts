import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../core.module';
import { ItemActions } from './item.actions';
import { ItemEpics } from './item.epics';
import { ItemService } from './item.service';
import { StoreModule } from '../../../store/store.module';

@NgModule({
  imports: [CoreModule, StoreModule, CommonModule],
  providers: [ItemActions, ItemEpics, ItemService],
})
export class ItemModule {}
