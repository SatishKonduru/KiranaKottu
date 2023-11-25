import { Component, Input } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DynamicDialogService } from 'src/app/services/dynamic-dialog.service';
import { UserMessageService } from 'src/app/services/user-message.service';
import { UserService } from 'src/app/services/user.service';
import { globalProperties } from 'src/app/shared/globlaProperties';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {

responseMsg :any
constructor(private _userService: UserService, 
  private _ngxService: NgxUiLoaderService,
  private _userMessage: UserMessageService,
  private _userDialogService: DynamicDialogService){}
  verify(otp: any){
    this._ngxService.start()
    let userEmail = localStorage.getItem('email') 
    let data = {
      email: userEmail,
      otp : otp
    }
    this._userService.verifyOtp(data).subscribe((res:any) => {
      this._ngxService.stop()
      this.responseMsg = res?.message
      this._userMessage.openSuccessMessage(this.responseMsg)
      this._userDialogService.closeDynamicDialog()
    },(err: any)=>{ 
      this._ngxService.stop()
      if(err?.error.message){
        this.responseMsg = err?.error.message
      }
      else{
        this.responseMsg = globalProperties.genericError
      }
      this._userMessage.openFailureMessage(this.responseMsg)
      this._userDialogService.closeDynamicDialog()
    })
  }


}
