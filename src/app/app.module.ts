import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ApplicationRef } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import {NgxStripeModule} from 'ngx-stripe';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import {FlashMessagesModule} from 'angular2-flash-messages';
import{AuthGuard} from './guards/auth.guard';

import {ValidateService } from './services/validate.service';
import {AuthService } from './services/auth.service';
import {ExtraService } from './services/extra.service';

import {NgxCaptchaModule} from 'ngx-captcha';
import{ReactiveFormsModule} from '@angular/forms';

import {ReCaptchaV3Service} from 'ngx-captcha';
import { DeleteComponent } from './components/delete/delete.component';
import { PasschangeComponent } from './components/passchange/passchange.component';
import { MapComponent } from './components/map/map.component';
import { PayComponent } from './components/pay/pay.component';

const appRoutes: Routes=[
  {path:'', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'profile', component:ProfileComponent},
  {path:'delete',component:DeleteComponent},
  {path:'home',component:HomeComponent},
  {path:'passchange',component:PasschangeComponent},
  {path:'map',component:MapComponent},
  {path:'pay', component:PayComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    RegisterComponent,
    HomeComponent,
    DeleteComponent,
    PasschangeComponent,
    MapComponent,
    PayComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    ReactiveFormsModule,
    NgxCaptchaModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyC-uKPU3cyx1McvKtf2fFZgfQhoX6Zle6k'
    }),
    AgmSnazzyInfoWindowModule,
    CommonModule,

    NgxStripeModule.forRoot('pk_test_EwdW4ScpzL1oRXGyjfCPXj1b'),
 
  ],
  providers: [ValidateService,
              AuthService,
              AuthGuard,
              ExtraService
              
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*{
                provide: AuthServiceConfig,
                useFactory: getAuthServiceConfigs
              // }*/
//SocialLoginModule