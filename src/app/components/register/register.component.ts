import { Component, OnInit } from '@angular/core';

import {ValidateService} from '../../services/validate.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';

import { checkAndUpdateBinding } from '@angular/core/src/view/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   name:string;
   email:string;
   username:string;
   password:string;


  constructor(public validateService:ValidateService,
              public router:Router,
              private flashMessage:FlashMessagesService,
              private authService:AuthService) { }

  ngOnInit() {

  }

  getStat5(){
    let check=this.password;
    if (JSON.stringify(check).length>=10){
      return true;
    }
    else{
      return false;
    }

  }

  getStat1(){
    let check=this.password;
    if (/[a-z]/.test(check)){
      return true;
    }
    else{
      return false;
    }

  }
  getStat2(){
    let check=this.password;
    if (/[A-Z]/.test(check)){
      return true;
    }
    else{
      return false;
    }

  }
  getStat3(){
    let check=this.password;
    if (/\W/.test(check)||/[_]/.test(check)){
      return true;
    }
    else{
      return false;
    }

  }
  getStat4(){
    let check=this.password;
    if (/\d/.test(check)){
      return true;
    }
    else{
      return false;
    }

  }

  onRegisterSubmit(){
    const user={
      name:this.name,
      email:this.email,
      username:this.username,
      password:this.password
    }


    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Please fill all the required fiels.',{cssClass:'alert-danger',timeout:3000});
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('Enter Valid Email.',{cssClass:'alert-danger',timeout:3000});
       return false;
    }

    if(!this.validateService.passStrength(user.password)){

      return false;
    }


    //Register User
    this.authService.registerUser(user).subscribe(data=>{
      if(data.success){
        this.flashMessage.show(data.msg,{cssClass:'alert-success',timeout:3000});
        this.router.navigate(['login']);
      }
      else{
        this.flashMessage.show(data.msg,{cssClass:'alert-success',timeout:3000});
        this.router.navigate(['register']);
      }
    });


  }//OnRegisterSubmit
}
