import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  username:string;
  user:any;
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

  delSure(){
  const user1={
     username:this.username,

  }
    if(this.user.username==user1.username){
      this.authService.delUser(user1).subscribe(data =>{
        if(data.success){
          this.flashMessages.show('Account not Deleted.',{cssClass:'alert-success',timeout:3000});
          this.router.navigate(['dashboard']);
        }
        else{
          this.flashMessages.show('Account Deleted Successfully.',{cssClass:'alert-danger',timeout:3000});
          this.router.navigate(['home']);
          this.authService.logout();
          }
      });
    }
    else{
      this.flashMessages.show('Enter Correct Username.',{cssClass:'alert-danger',timeout:3000});
    }

   }


}
