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
  productos: CartProduct[] = []; //Productos para el carrito

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(product: Product) {
    this.productos = this.cartService.getItems(); //Extrae los productos de carrito

    this.cartService.addToCart({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: 1,
    });
    window.alert("Your product has been added to the cart!");
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
