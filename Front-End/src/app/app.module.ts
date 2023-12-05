import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './modules/prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DynamicDialogService } from './services/dynamic-dialog.service';
import { OtpComponent } from './components/otp/otp.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NgxUiLoaderModule, NgxUiLoaderConfig,SPINNER, PB_DIRECTION } from 'ngx-ui-loader';
import { UserService } from './services/user.service';
import { UserMessageService } from './services/user-message.service';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { UserModule } from './modules/user/user.module';
import { AdminModule } from './modules/admin/admin.module';
import { UserRoutingModule } from './modules/user/user-routing.module';
import { LogoutComponent } from './components/logout/logout.component';
import { DashboardService } from './services/dashboard.service';
import { AuthService } from './services/auth.service';
import { RouteGuardService } from './services/route-guard.service';
import { TokenInterceptor } from './services/token.interceptor';






const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  text: "Loading....",
  textColor: 'orange',
  textPosition: 'center-center',
  pbColor: 'orange',
  bgsColor: 'orange',
  fgsColor: 'orange',
  fgsType: SPINNER.squareJellyBox,
  fgsSize: 100,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    OtpComponent,
    ForgotPasswordComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    UserModule,
    AdminModule,
   
  ],
  providers: [
    DynamicDialogService,
    UserService,
    UserMessageService,
    DashboardService,
    AuthService,
    RouteGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
