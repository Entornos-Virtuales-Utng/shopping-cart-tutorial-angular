import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CartProduct, Product, products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent {
  product: Product | undefined;
  productos = this.cartService.getItems();

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(product: Product) {
    console.log('Agregando producto...');
    this.productos = this.cartService.getItems(); //Extrae los productos de carrito

    let total = this.cartService.getTotal();
    total += product.price;
    this.cartService.addToCart({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: 1,
    });
    this.cartService.setTotal(total);
    window.alert("Tú producto ha sido agregado al carrito!");
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
