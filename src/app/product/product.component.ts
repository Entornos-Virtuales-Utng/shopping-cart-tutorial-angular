import { Component, Input } from '@angular/core';
import {Product, CartProduct} from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
    @Input() product!:Product;
    display: boolean = false;

    constructor(private cartService:CartService){}

    share() {
      window.alert('El producto ha sido compartido!!');
    }

    onNotify() {
      window.alert('Serás notificado cuando el producto esté en venta!!');
    }

    addToCart(product: Product) {
      
      this.cartService.addToCart({id: product.id, name: product.name, description: product.description,
                price: product.price, quantity: 1});
      window.alert('Your product has been added to the cart!');
    }
    
    showDialog() {
        this.display = true;
    }
}
