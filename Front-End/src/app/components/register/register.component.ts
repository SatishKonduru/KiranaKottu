import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogService } from 'src/app/services/dynamic-dialog.service';
import { globalProperties } from 'src/app/shared/globlaProperties';
import { OtpComponent } from '../otp/otp.component';
import { UserService } from 'src/app/services/user.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserMessageService } from 'src/app/services/user-message.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm : FormGroup;
  responseMsg: any;
  isVisible : boolean = true
  constructor(private _formBuilder: FormBuilder, 
    private _userDialogService: DynamicDialogService, 
    private _userService: UserService,
    private _ngxService: NgxUiLoaderService,
    private _userMessage: UserMessageService){}

  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      username: [null,[Validators.required, Validators.pattern(globalProperties.nameRegex)]],
      email: [null, [Validators.required, Validators.pattern(globalProperties.emailRegex)]],
      password: [null, [Validators.required]],
      contactNumber: [null,[Validators.required, Validators.pattern(globalProperties.contactNumberRegex)]]
    })
  }

  getOtp(){ 
    this._ngxService.start()
    // this._userDialogService.closeDynamicDialog()
    let user = this.registerForm.value;
    var data = {
      'email': user.email
    }
   this._userService.getOtp(data)
   .subscribe((res)=>{
   this._ngxService.stop()
    let dialogConfig = {
      header: 'OTP Verification',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
  } 
    this.responseMsg = res?.message
    console.log("Response Message: ", this.responseMsg)
    this._userMessage.openSuccessMessage(this.responseMsg)
    this._userDialogService.openDynamicDialog(OtpComponent, dialogConfig)
  
   }, (err)=>{
    this._ngxService.stop()
    if(err?.error.message){
      this.responseMsg = err?.error.message
    }
    else{
      this.responseMsg = globalProperties.genericError
    }
    this._userMessage.openFailureMessage(this.responseMsg) 

   })
 }
 verifyOtp(){
  this.isVisible = false
 }
 userRegister(){

 }

}
