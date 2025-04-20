import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgClass, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  orders = [
    { id: 'ORD-001', customer: 'Alice Smith', amount: 240, status: 'Completed' },
    { id: 'ORD-002', customer: 'John Doe', amount: 180, status: 'Pending' },
    { id: 'ORD-003', customer: 'Jane Cooper', amount: 310, status: 'Cancelled' },
    { id: 'ORD-004', customer: 'Bob Martin', amount: 120, status: 'Completed' },
  ];
}
