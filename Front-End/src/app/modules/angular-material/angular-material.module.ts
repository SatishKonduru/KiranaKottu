import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';



const angularMaterialCommponents = [
  MatDialogModule,
  MatSnackBarModule
]
@NgModule({
 imports: [angularMaterialCommponents],
 exports: [angularMaterialCommponents]
})
export class AngularMaterialModule { }
