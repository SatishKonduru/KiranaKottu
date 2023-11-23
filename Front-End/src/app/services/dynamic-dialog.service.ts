import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Injectable({
  providedIn: 'root'
})
export class DynamicDialogService {
  public dialogRef : DynamicDialogRef
  constructor(private dialogService: DialogService) { }
  
  openDynamicDialog(component: any, config : any) {
    const ref: DynamicDialogRef = this.dialogService.open(component, config);
    this.dialogRef = ref;
   
}

closeDynamicDialog() {
  // Check if the dialogRef is defined before trying to close it
  if (this.dialogRef) {
    this.dialogRef.destroy()
    
  }
}


  
}


