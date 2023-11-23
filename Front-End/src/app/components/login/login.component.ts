import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { globalProperties } from 'src/app/shared/globlaProperties';
import { RegisterComponent } from '../register/register.component';
import { DialogRef } from '@angular/cdk/dialog';
import { DynamicDialogService } from 'src/app/services/dynamic-dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: any = FormGroup;
  

  constructor(
    private _formBuilder: FormBuilder,
     public userDialogService: DynamicDialogService
    ){}
  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: [null,[Validators.required, Validators.pattern(globalProperties.emailRegex)]],
      password: [null, [Validators.required]]
    })
  }

  login(){
    console.log(this.loginForm.value)
  }

  signUp(){
    
    this.userDialogService.closeDynamicDialog()
    let dialogConfig = {
      header: 'Register',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      // width: '50vw',
      // style: { 'margin-left': 'auto', 'margin-right': '1rem' },
    } 
    this.userDialogService.openDynamicDialog(RegisterComponent, dialogConfig)
  }
}
