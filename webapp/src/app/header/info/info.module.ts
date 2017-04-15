import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';

//import { InfoComponent } from './info.component';
import { InfoEpics } from './info.epics';
import { InfoService } from './info.service';
import { InfoActions } from './info.actions';

@NgModule({
    declarations: [ InfoComponent ],
    providers: [
        InfoEpics,
        InfoService,
        InfoActions,
    ],
    imports: [ CommonModule ],
    exports: [ InfoComponent ],
})
export class InfoModule {}