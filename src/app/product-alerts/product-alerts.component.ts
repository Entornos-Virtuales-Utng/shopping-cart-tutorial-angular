import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

  @Input() product!: Product; // Se le pasará un producto
  @Output() notify = new EventEmitter(); // Notificar al papá

}
