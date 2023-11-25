import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public apiURL = environment.apiURL
  constructor(private _http: HttpClient) { }

  getOtp(data: any):Observable<any>{
    console.log("Email in OTP Service: ", data)
    return this._http.post(this.apiURL+'/user/getOtp', data, {
      headers: new HttpHeaders().set('Content-Type','application/json')
    })
  }

}