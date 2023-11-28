import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { globalProperties } from 'src/app/shared/globlaProperties';
import { RegisterComponent } from '../register/register.component';
import { DialogRef } from '@angular/cdk/dialog';
import { DynamicDialogService } from 'src/app/services/dynamic-dialog.service';
import { UserService } from 'src/app/services/user.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Router } from '@angular/router';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: any = FormGroup;
  responseMsg: any =''

  constructor(
    private _formBuilder: FormBuilder,
     public userDialogService: DynamicDialogService,
     private _userService: UserService,
     private _ngxService: NgxUiLoaderService,
     private _snackbar: SnackbarService,
     private _router: Router
    ){}
  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: [null,[Validators.required, Validators.pattern(globalProperties.emailRegex)]],
      password: [null, [Validators.required]]
    })
  }

  login(){
    this._ngxService.start()
    const formData = this.loginForm.value
    const data = {
      email: formData.email,
      password: formData.password
    }
    this._userService.login(data)
    .subscribe((res: any) =>{
      this._ngxService.stop()
      localStorage.setItem('token', res.token)
      this.userDialogService.closeDynamicDialog('LOGIN_PAGE')
      this._userService.afterlogin()
      if(res.role === 'user')
      {
          this._router.navigate(['/user/dashboard'])
      }
      else{
        this._router.navigate(['/admin/dashboard'])
      }
    }, (err: any)=>{
      this._ngxService.stop()
      if(err?.error.message){
        this.responseMsg = err?.error.message
      }
      else{
        this.responseMsg = globalProperties.genericError
      }
      this._snackbar.openSnackbar(this.responseMsg, globalProperties.error)
    })
  }

  signUp(){
    this.userDialogService.closeDynamicDialog("LOGIN_PAGE")
    let dialogConfig = {
      header: 'Register',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      
      // width: '50vw',
      // style: { 'margin-left': 'auto', 'margin-right': '1rem' },
    } 
    this.userDialogService.openDynamicDialog(RegisterComponent, dialogConfig,"REGISTER_PAGE")
  }

  forgotPassword(){
   this.userDialogService.closeDynamicDialog('LOGIN_PAGE')
   let dialogConfig = {
    header: 'Forgot Password?',
    contentStyle: { overflow: 'auto' },
    baseZIndex: 10000,
    maximizable: true
  } 
   this.userDialogService.openDynamicDialog(ForgotPasswordComponent,dialogConfig,"FORGOT_PAGE")
  }




}
