import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {ValidateService} from '../../services/validate.service';

@Component({
  selector: 'app-passchange',
  templateUrl: './passchange.component.html',
  styleUrls: ['./passchange.component.css']
})
export class PasschangeComponent implements OnInit {

  user:any;
  username:string;
  password:string;
  password1:string;
  password2:string;
  constructor(private authService:AuthService,
              private flashMessages:FlashMessagesService,
              private router:Router,
              private validateService:ValidateService) { }


  ngOnInit() {
    this.authService.getProfile().subscribe(profile=>{
      console.log(profile.user);
       this.user=profile.user;
   },err=>{
       console.log(err);
       return false;
   });
  }

  changePass(){
    //first check old pass(compare)(authenticate/register)
    const user={
        username:this.username,
        password:this.password,
        password1:this.password1,
        password2:this.password2
    }
      
    if(!this.validateService.validateLogin(user)){
      this.flashMessages.show('Please fill all the required fiels.',{cssClass:'alert-danger',timeout:3000});
      return false;
    }

    this.authService.authenticateUser(user).subscribe(data =>{
     if(data.success){
            //then check if pass1==pass2
            if(user.password1==user.password2){
               // both T, then replace database pass from pass1(2) 
                    
               this.authService.changePass(user).subscribe(data=>{
                if(data.success){
                  this.flashMessages.show(data.msg,{cssClass:'alert-success',timeout:3000});
                  this.router.navigate(['login']);
                  this.authService.logout();
                }
                else{
                  this.flashMessages.show(data.msg,{cssClass:'alert-danger',timeout:3000});
                  }
                });
               
            } 
            else{
              this.flashMessages.show('Password does not matches.',{cssClass:'alert-danger',timeout:2500});
              return false;
            } 

     }
     else{
      this.flashMessages.show("Fill correct username or password.",{cssClass:"alert-danger",timeout:5000});
      
     }
    });

    
    
  }
}
