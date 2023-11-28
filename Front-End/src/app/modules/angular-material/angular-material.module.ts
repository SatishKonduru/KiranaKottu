import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';



const angularMaterialCommponents = [
  MatDialogModule,
  MatSnackBarModule,
  MatButtonModule
]
@NgModule({
 imports: [angularMaterialCommponents],
 exports: [angularMaterialCommponents]
})
export class AngularMaterialModule { }
