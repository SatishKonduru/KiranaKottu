import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from 'primeng/button';
import {  DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';




const primeNgComponents = [
  PanelModule,
  CarouselModule,
  DialogModule,
  DynamicDialogModule,
  MessagesModule
  
]
@NgModule({
  imports: [primeNgComponents],
  exports: [primeNgComponents],
  providers: [DialogService, MessageService]
})
export class PrimeNgModule { }
