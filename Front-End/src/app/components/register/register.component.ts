import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogService } from 'src/app/services/dynamic-dialog.service';
import { globalProperties } from 'src/app/shared/globlaProperties';
import { OtpComponent } from '../otp/otp.component';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm : FormGroup;
  
  constructor(private _formBuilder: FormBuilder, 
    private _userDialogService: DynamicDialogService){}

  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      username: [null,[Validators.required, Validators.pattern(globalProperties.nameRegex)]],
      email: [null, [Validators.required, Validators.pattern(globalProperties.emailRegex)]],
      password: [null, [Validators.required]],
      contactNumber: [null,[Validators.required, Validators.pattern(globalProperties.contactNumberRegex)]]
    })
  }

  getOtp(){ 
   
   this._userDialogService.closeDynamicDialog()
   let dialogConfig = {
    header: 'OTP Verification',
    contentStyle: { overflow: 'auto' },
    baseZIndex: 10000,
    // maximizable: true
   } 
   this._userDialogService.openDynamicDialog(OtpComponent, dialogConfig)
    
  }

}
