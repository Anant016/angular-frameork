import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
@Component({
  selector: 'app-passchange',
  templateUrl: './passchange.component.html',
  styleUrls: ['./passchange.component.css']
})
export class PasschangeComponent implements OnInit {

  user:any;
  oldpass:string;
  password1:string;
  password2:string;
  constructor(private authService:AuthService,
              private flashMessages:FlashMessagesService,
              private router:Router) { }


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
    const oldp=this.oldpass;
    this.authService.checkOldp(oldp).subscribe(data =>{
      if(data.success){
        
      }
      else{

        }
    });

    //then check if pass1==pass2
    //if both T, then replace database pass from pass1(2)  
  }
}
