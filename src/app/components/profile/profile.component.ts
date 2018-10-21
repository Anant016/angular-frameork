import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {ExtraService} from '../../services/extra.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;

  constructor(private authService:AuthService,
    private router:Router,
    private flashMessages:FlashMessagesService,
    private extraService:ExtraService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile=>{

        this.user=profile.user;
    },err=>{
        console.log(err);
        return false;
    });


  }



collapse(){
   var item=document.getElementById('idpara');
   if(item.style.display=='none'){
     item.style.display='block';
   }
   else{
    item.style.display='none'
   }
}

docDownload(){
  console.log('a');
  this.extraService.download().subscribe(data=>{
    if(data.success){
      this.flashMessages.show(data.msg,{cssClass:'alert-success',timeout:2000});
    }
    else{
      this.flashMessages.show(data.msg,{cssClass:'alert-danger',timeout:3000});
    }
  });
}


}
