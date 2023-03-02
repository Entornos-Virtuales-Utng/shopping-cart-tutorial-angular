import { Injectable } from "@angular/core";
import { CartProduct } from "./products";
import { HttpClient, HttpClientModule} from '@angular/common/http';


@Injectable({
  providedIn: "root",
})
export class CartService {
  items: CartProduct[] = []; //Elementos del carrito de compras
  total: number = 0; //Total a pagar en carrito

  constructor(private http : HttpClient) {}

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

  getShippingPrices() {
    return this.http.get<{type:string, price:number}[]>('/assets/shipping.json');
  }

  //Total de compra en carrito de compra.
  setTotal(total:number) {
    this.total = total;
  }

  //Obtener el total de la compra
  getTotal() {
    return this.total;
  }
}
