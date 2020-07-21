



import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuModalComponent } from './au-modal.component';
import { AuModalOpenOnClickDirective } from './au-modal-open-on-click.directive';
import {AuModalService} from "./modal.service";



@NgModule({
  declarations: [AuModalComponent],
  imports: [
    CommonModule
  ],
  exports: [AuModalComponent]
})
export class AuModalModule {




}



