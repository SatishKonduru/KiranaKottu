import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from './auth.service';
import { globalProperties } from '../shared/globlaProperties';
@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

 auth : any ;
  constructor(private _injector: Injector,
    private _router: Router,
    private _snackbar: SnackbarService) { 
      this.auth = this._injector.get(AuthService)
    }

    canActivate(route: ActivatedRouteSnapshot):boolean{
      let expectedRoleArray = route.data.expectedRole
      const token: any = localStorage.getItem('token')
      var tokenPayload : any; 
      try{
          tokenPayload = jwtDecode(token)
      }
      catch(err){
        localStorage.clear()
        this._router.navigate(['/'])
      }
      let checkRole = false
      for(let i = 0 ; i< expectedRoleArray.length; i++){
        if(expectedRoleArray[i]== tokenPayload.role){
          checkRole = true
        }
      }
      if(tokenPayload.role == 'admin')
      {
        console.log("Role in Guard: ", tokenPayload.role)
        if(this.auth.isAuthenticated() && checkRole){return true}
        else{
          this._snackbar.openSnackbar(globalProperties.unauthorized, globalProperties.error)
        }
        this._router.navigate(['/admin/dashboard'])
        return true
      }
      else{
        this._router.navigate(['/home'])
        return false
      }
       
      
}


}
