import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {AuthService} from '../../services/auth.service';

import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
   user:any;

   elements:Elements;
   card:StripeElement;
   elementsOptions:ElementsOptions={
     locale:'es'
   };

   stripeTest:FormGroup;

  constructor( private authService :AuthService,
                private fb:FormBuilder,
                private stripeService:StripeService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile=>{

      this.user=profile.user;
  },err=>{
      console.log(err);
      return false;
  });


  this.stripeTest = this.fb.group({
    name: ['', [Validators.required]]
  });
  this.stripeService.elements(this.elementsOptions)
    .subscribe(elements => {
      this.elements = elements;
      // Only mount the element the first time
      if (!this.card) {
        this.card = this.elements.create('card', {
          style: {
            base: {
              iconColor: '#666EE8',
              color: '#31325F',
              lineHeight: '40px',
              fontWeight: 300,
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              fontSize: '18px',
              '::placeholder': {
                color: '#CFD7E0'
              }
            }
          }
        });
        this.card.mount('#card-element');
      }
    });
  }


  buy() {
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card, { name })
      .subscribe(result => {
        if (result.token) {
          // Use the token to create a charge or a customer
          // https://stripe.com/docs/charges
          console.log(result.token);
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }
}
