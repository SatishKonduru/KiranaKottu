import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { DynamicDialogService } from 'src/app/services/dynamic-dialog.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { LogoutComponent } from '../logout/logout.component';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public userDialogService: DynamicDialogService ,
    private _userDialog : MatDialog,
       private _router: Router ){}

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

   logout(){
    var dialogConfig = new MatDialogConfig()
    dialogConfig.width = '20rem'
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
  let dialogRef = this._userDialog.open(LogoutComponent, dialogConfig)
    dialogRef.afterClosed().subscribe(res=>{
      if(res === 'yes'){
        localStorage.clear()
        this._router.navigate(['/home'])
      }
      else{}
    })
   }

}
