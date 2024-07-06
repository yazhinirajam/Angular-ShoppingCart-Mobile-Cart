import { Injectable } from '@angular/core';

interface MobileModel {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface MobileBrand {
  name: string;
  models: MobileModel[];
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: MobileModel[] = [];

  private mobileBrands: MobileBrand[] = [
    {
      name: 'iPhone',
      models: [
        { id: 1, name: 'iPhone 12', price: 79900, quantity: 1 },
        { id: 2, name: 'iPhone 12 Pro', price: 119900, quantity: 1 }
      ]
    },
    {
      name: 'Oppo',
      models: [
        { id: 3, name: 'Oppo Find X3', price: 64999, quantity: 1 },
        { id: 4, name: 'Oppo Reno 6', price: 29990, quantity: 1 }
      ]
    },
    {
      name: 'OnePlus',
      models: [
        { id: 5, name: 'OnePlus 9', price: 49999, quantity: 1 },
        { id: 6, name: 'OnePlus 9 Pro', price: 64999, quantity: 1 }
      ]
    },
    {
      name: 'Samsung',
      models: [
        { id: 7, name: 'Samsung Galaxy S21', price: 69999, quantity: 1, },
        { id: 8, name: 'Samsung Galaxy Note 20', price: 84999, quantity: 1 }
      ]
    },
    {
      name: 'Huawei',
      models: [
        { id: 9, name: 'Huawei P40', price: 50999, quantity: 1 },
        { id: 10, name: 'Huawei Mate 40', price: 62999, quantity: 1 }
      ]
    }
  ];

  getMobileBrands() {
    return this.mobileBrands;
  }

  getCart() {
    return this.cart;
  }

  addToCart(mobile: MobileModel) {
    const cartItem = this.cart.find(item => item.id === mobile.id);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      this.cart.push({ ...mobile, quantity: 1 });
    }
  }

  updateQuantity(id: number, quantity: number) {
    const cartItem = this.cart.find(item => item.id === id);
    if (cartItem) {
      cartItem.quantity = quantity;
    }
  }

  removeFromCart(id: number) {
    this.cart = this.cart.filter(item => item.id !== id);
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, mobile) => total + (mobile.price * mobile.quantity), 0);
  }
}
