import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  cardForm  = new FormGroup({ 
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(5),
      // Validators.pattern(/\s/)
    ]),
    cardNumber: new FormControl(''),
    expiration: new FormControl(''),
    securityCode: new FormControl(''),
  });

  nameFix: FormControl = this.cardForm.controls.name as FormControl
  cardNumberFix: FormControl = this.cardForm.controls.cardNumber as FormControl
  expirationFix: FormControl = this.cardForm.controls.expiration as FormControl
  securityCodeFix: FormControl = this.cardForm.controls.securityCode as FormControl


  constructor() {
    console.log(this.cardForm.get('name'))
   }

  ngOnInit(): void {
  }

}
