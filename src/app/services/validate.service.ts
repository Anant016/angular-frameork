import { Injectable } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {
   pass:boolean=true;
  constructor(private flashMessages:FlashMessagesService) { }

  //Validate Register
  validateRegister(user){
    if(user.name==undefined ||user.email==undefined||user.username==undefined||user.password==undefined){
      return false;
    }
    else{
      return true;
    }
  }
  //CheckPassword Stregth
  
  passStrength(password){
    if (password.length < 8)
     { this.flashMessages.show('Password Must Contain atleast 8 characters.',{cssClass:'alert-danger',timeout:6000});
      this.pass=false;
     }
    if (!/[A-Z]/.test(password)){
      this.flashMessages.show('Password must contain one capital letter.',{cssClass:'alert-danger',timeout:6000});
      this.pass=false;
    }
    if(!/[a-z]/.test(password)){
      this.flashMessages.show('Password must contain one small letter.',{cssClass:'alert-danger',timeout:6000});
      this.pass=false;
    }
    if(!/\d/.test(password)){
      this.flashMessages.show('Password must contain a digit.',{cssClass:'alert-danger',timeout:6000});
      this.pass=false;
    }
    if(!/\W/.test(password)){
      this.flashMessages.show('Password must contain a special character.',{cssClass:'alert-danger',timeout:6000});
      this.pass=false;
    }
    
    if(this.pass){
      return true;
    }
    else{
      return false;
    }
  }

  //ValidateEmail
  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()); 
  }
  

 

}
