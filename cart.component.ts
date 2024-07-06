import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart = this.cartService.getCart();
  totalPrice = this.cartService.getTotalPrice();

  constructor(private cartService: CartService) {}

  ngDoCheck() {
    this.totalPrice = this.cartService.getTotalPrice();
  }

  updateQuantity(id: number, event: any) {
    let quantity = +event.target.value; // Convert to number
    if (quantity < 0) {
      quantity = 0; // Ensure quantity doesn't go negative
    }
    this.cartService.updateQuantity(id, quantity);
    // Update the local cart array after update
    this.cart = this.cartService.getCart();
  }

  removeFromCart(id: number) {
    this.cartService.removeFromCart(id);
    // Update the local cart array after removal
    this.cart = this.cartService.getCart();
  }
}
