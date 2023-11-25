import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class UserMessageService {

  constructor(private _userMsg: MessageService) { }

  openSuccessMessage(msg: any){
    this._userMsg.add({
      severity:'success', 
      summary: 'Success',
      detail: msg,
      closable: true
     })
  }
  openFailureMessage(msg:any){
    this._userMsg.add({
      severity:'error', 
     summary: 'Error',
     detail: msg,
     closable: true,
    })
  }


}
