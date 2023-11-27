import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Injectable({
  providedIn: 'root'
})
export class DynamicDialogService {
  public dialogRefs : { [id:string]: DynamicDialogRef } = {}
  constructor(private dialogService: DialogService) { }
  
  openDynamicDialog(component: any, config : any, id: string) {
   const dialogRef = this.dialogService.open(component, config);
    this.dialogRefs[id] = dialogRef;
  }

closeDynamicDialog(id: string) {
  const dialogRef = this.dialogRefs[id];
  if (dialogRef) {
    dialogRef.close();
    delete this.dialogRefs[id];
  }
  }



  
}


