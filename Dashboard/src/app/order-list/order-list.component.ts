import { Component } from '@angular/core';
import { ORDERS } from '../../Data/Orders';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-list',
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {
  orders = ORDERS;
}
