import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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

import {NgxCaptchaModule} from 'ngx-captcha';
import{ReactiveFormsModule} from '@angular/forms';

import {ReCaptchaV3Service} from 'ngx-captcha';
import { DeleteComponent } from './components/delete/delete.component';
import { PasschangeComponent } from './components/passchange/passchange.component';

const appRoutes: Routes=[
  {path:'', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'profile', component:ProfileComponent},
  {path:'delete',component:DeleteComponent},
  {path:'home',component:HomeComponent},
  {path:'passchange',component:PasschangeComponent}
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
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    ReactiveFormsModule,
    NgxCaptchaModule
  ],
  providers: [ValidateService,
              AuthService,
              AuthGuard,
              
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*{
                provide: AuthServiceConfig,
                useFactory: getAuthServiceConfigs
              // }*/
//SocialLoginModule