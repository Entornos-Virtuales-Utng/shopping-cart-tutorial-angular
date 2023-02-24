import { Injectable } from "@angular/core";
import { CartProduct } from "./products";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: CartProduct[] = [];

  constructor() {}

  addToCart(product: CartProduct) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
