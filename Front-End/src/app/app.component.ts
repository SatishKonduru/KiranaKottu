import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kiranaKottu';
  
  constructor(private _userService: UserService){}
  
  get status(): boolean {
    return this._userService.isVisible;
    
  }
  
}
