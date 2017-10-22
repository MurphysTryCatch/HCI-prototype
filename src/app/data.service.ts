import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Item } from './item';
import { ITEMS } from './items';

@Injectable()
export class DataService {

  cart: Item[] = [];
  cartTotalQty = new BehaviorSubject<number>(0);
 

  getItems(): Item[] {
    return ITEMS;
  }

  addToCart(item: Item): void {
    this.cart.push(item);
    this.cartTotalQty.next(this.cartTotalQty.value + 1);
    //this.dataChange.next(this.cartTotalQty);
  }
}