import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DynamicDialogService } from 'src/app/services/dynamic-dialog.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { globalProperties } from 'src/app/shared/globlaProperties';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{

  fogotForm : any = FormGroup;
  responseMsg: any = ''
  constructor(private _userDialogService: DynamicDialogService,
    private _formBuilder: FormBuilder,
    private _snackbar: SnackbarService,
    private _userService: UserService,
    private _ngxService: NgxUiLoaderService){}

ngOnInit(): void {
  this.fogotForm = this._formBuilder.group({
    email: [null, [Validators.required, Validators.pattern(globalProperties.emailRegex)]]
  })
}
getPassword(){
  this._ngxService.start()
  const formData = this.fogotForm.value
  const data = { email: formData.email}
  this._userService.forgotPassword(data)
  .subscribe((res:any) => {
    this._ngxService.stop()
    this.responseMsg = res.message
    this._userDialogService.closeDynamicDialog('FORGOT_PAGE')
    this._snackbar.openSnackbar(this.responseMsg,'')
  },(err:any) => {
    if(err?.error.message){
      this.responseMsg = err?.error.message
    }
    else{
      this.responseMsg = globalProperties.genericError
    }
    this._snackbar.openSnackbar(this.responseMsg, globalProperties.error)
    this._userDialogService.closeDynamicDialog('FORGOT_PAGE')
  })
  }
}
