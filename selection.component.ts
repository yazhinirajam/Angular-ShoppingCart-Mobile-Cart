import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-mobile-selection',
  templateUrl: './mobile-selection.component.html',
  styleUrls: ['./mobile-selection.component.css']
})
export class MobileSelectionComponent {
  brands = this.cartService.getMobileBrands();
  selectedBrand: any;
  selectedModel: any;

  constructor(private cartService: CartService) {}

  selectBrand(brand: any) {
    this.selectedBrand = brand;
    this.selectedModel = null;
  }

  addToCart(model: any) {
    this.cartService.addToCart(model);
    alert(`${model.name} has been added to the cart!`);
  }
}
