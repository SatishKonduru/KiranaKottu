import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from 'primeng/button';
import {  DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
const primeNgComponents = [
  PanelModule,
  CarouselModule,
  DialogModule,
  DynamicDialogModule
  
]
@NgModule({
  imports: [primeNgComponents],
  exports: [primeNgComponents],
  providers: [DialogService]
})
export class PrimeNgModule { }
