import {Component, Input} from '@angular/core';
import {Item} from '../models/item';
import {Phone} from '../models/phone';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() items = [] as Item<Phone>[];

}
