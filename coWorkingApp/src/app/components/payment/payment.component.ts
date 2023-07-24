import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions,
} from '@stripe/stripe-js';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AlertsReservaService } from 'src/app/services/alerts-reserva.service';
import { PaymentServiceService } from 'src/app/services/paymentService.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;
  faUser = faUser;
  token: string | null = null;
  
  cardOptions: StripeCardElementOptions = {
    style: {
      base:{
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    },
    classes:{
     base: 'stripe',
    },
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'es',
  };

  stripeTest: FormGroup;

  constructor(private fb: FormBuilder, private stripeService: StripeService,
    private alertService : AlertsReservaService, private paymentService: PaymentServiceService) {}

  ngOnInit(): void {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.paymentService.createTokenEvent.subscribe(() => {
      this.createToken();
    });
  }
 
  createToken(): void {
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          // Use the token
          this.paymentService.setTokenValue(true);
          console.log(result.token.id);
        } else if (result.error) {
          this.alertService.show(4000, 'error');
          console.log(result.error.message);
    
        }
      });
  }
}