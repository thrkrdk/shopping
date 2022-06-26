import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Item} from '../models/item';
import {Brand, Color, Phone, PhoneForm} from '../models/phone';
import {ControlsOf} from '../models/controls-of';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent {
  @Input() shirt!: Phone;
  @Output() addPhoneToCart = new EventEmitter<Item<Phone>>();

  readonly Colors = Object.values(Color);
  readonly Brands = Object.values(Brand);

  formGroup = new FormGroup<ControlsOf<Item<PhoneForm>>>({
    price: new FormControl({value: 100, disabled: true}),
    quantity: new FormControl(1),
    item: new FormGroup({
      id: new FormControl(''),
      color: new FormControl(Color.Green as Color),
      brand: new FormControl(Brand.Apple as Brand),
      name: new FormControl('iPhone'),
    }),
  })

  onSubmit(): void {
    this.addPhoneToCart.next(this.formGroup.getRawValue());
  }
}
