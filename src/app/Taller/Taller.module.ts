import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TallerComponent } from './Taller.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TallerComponent],
  exports: [TallerComponent]
})
export class TallerModule { }
