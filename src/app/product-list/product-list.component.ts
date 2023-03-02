import { Component } from '@angular/core';


import { products } from '../products';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  constructor(private database:DatabaseService) {
    //products = database.getItems();
  }

  ngOnInit(): void {
   /* this.database.getItems().subscribe(response => {
        this.products = response.data;
    });*/
  }
}
