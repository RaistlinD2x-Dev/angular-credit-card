import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

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
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    ]),
    securityCode: new FormControl('',[
      Validators.required,
      Validators.min(100),
      Validators.max(999),
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });

  nameFix: FormControl = this.cardForm.controls.name as FormControl
  cardNumberFix: FormControl = this.cardForm.controls.cardNumber as FormControl
  expirationFix: DateFormControl = this.cardForm.controls.expiration as DateFormControl
  securityCodeFix: FormControl = this.cardForm.controls.securityCode as FormControl


  constructor() {
    console.log(this.cardForm.get('name'))
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Form was submitted')
  }

}
