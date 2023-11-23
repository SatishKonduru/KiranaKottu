import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';



const angularMaterialCommponents = [
  MatDialogModule
]
@NgModule({
 imports: [angularMaterialCommponents],
 exports: [angularMaterialCommponents]
})
export class AngularMaterialModule { }
