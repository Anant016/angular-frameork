import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {ValidateService} from '../../services/validate.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor(private authService:AuthService,
               private router:Router,
               private flashMessages:FlashMessagesService,
               private validateService:ValidateService
               ) { }

  ngOnInit() {}




  onLoginSubmit(){
    const user={
    username:this.username,
    password:this.password
    }

    if(!this.validateService.validateLogin(user)){
      this.flashMessages.show('Please fill all the required fiels.',{cssClass:'alert-danger',timeout:3000});
      return false;
    }

    this.authService.authenticateUser(user).subscribe(data =>{
     if(data.success){
       this.authService.storeUserData(data.token,data.user);
      this.flashMessages.show('You are logged in.',{cssClass:"alert-success",timeout:5000});
      this.router.navigate(['dashboard']);

     }
     else{
      this.flashMessages.show(data.msg,{cssClass:"alert-danger",timeout:5000});
      this.router.navigate(['login']);
     }
    });


  }//onLoginSubmit


}
