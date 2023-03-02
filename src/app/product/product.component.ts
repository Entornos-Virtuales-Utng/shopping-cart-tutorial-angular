import { Component, Input } from "@angular/core";
import { Product, CartProduct } from "../products";
import { CartService } from "../cart.service";
import { MessageService } from "primeng/api";
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
  providers: [MessageService],
})
export class ProductComponent {
  @Input() product!: Product;
  display: boolean = false;
  productos = this.cartService.getItems();

  constructor(
    private cartService: CartService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  share() {
    window.alert("El producto ha sido compartido!!");
  }

  onNotify() {
    window.alert("Serás notificado cuando el producto esté en venta!!");
  }

  addToCart(product: Product) {
    console.log("Agregando producto...");

    let total = this.cartService.getTotal(); //Total en carrito en compra
    total += product.price;

    //Buscar id del producto
    let producto = this.productos.find((p) => p.id === product.id);

    if (!producto) {
      console.log("Agregando producto " + JSON.stringify(product));
      let p = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: 1,
      };

      this.cartService.addToCart(p);
    } else {
      console.log("Agregando producto " + JSON.stringify(product));
      producto.quantity += 1;

      let index = this.productos.findIndex((p) => p.id === product.id);
      this.productos[index] = producto;
    }
    this.cartService.setTotal(total);

    //window.alert("Your product has been added to the cart!");
    this.messageService.add({
      severity: 'success',
      detail: 'Se agrega al carrito de compras',
  });
  }

  showDialog() {
    this.display = true;
  }
}
