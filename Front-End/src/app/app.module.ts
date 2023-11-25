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
import {HttpClientModule} from '@angular/common/http';
import { NgxUiLoaderModule, NgxUiLoaderConfig,SPINNER, PB_DIRECTION } from 'ngx-ui-loader';
import { UserService } from './services/user.service';
import { UserMessageService } from './services/user-message.service';




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
    OtpComponent
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
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [
    DynamicDialogService,
    UserService,
    UserMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
