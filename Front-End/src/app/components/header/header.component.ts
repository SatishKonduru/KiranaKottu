import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { DynamicDialogService } from 'src/app/services/dynamic-dialog.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public userDialogService: DynamicDialogService  ){}

  showLogin() {
    
   let dialogConfig = {
    header: 'Login',
    contentStyle: { overflow: 'auto' },
    baseZIndex: 10000,
    maximizable: true,
    // style: { 'margin-left': 'auto', 'margin-right': '1rem' }
  } 
  this.userDialogService.openDynamicDialog(LoginComponent, dialogConfig,"LOGIN_PAGE")
 
   }

   check(){
    if(localStorage.getItem('token')){
      return true
    }
    else{
      return false
    }
   }

}
