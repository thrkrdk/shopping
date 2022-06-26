import {Component} from '@angular/core';
import {Phone} from './models/phone';
import {Item} from './models/item';
import {isEqual} from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [] as Item<Phone>[];

  onAddPhoneToCart(item: Item<Phone>): void {
    const existPhone = this.items.find((i) => isEqual(i.item, item.item));

    if (existPhone) {
      existPhone.quantity += item.quantity;
      existPhone.price += item.quantity * item.price;
      return;
    } else {
      item.price = item.price * item.quantity;
    }

    this.items.push(item);
  }
}
