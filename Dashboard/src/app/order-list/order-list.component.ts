import { Component, AfterViewInit } from '@angular/core';
import { ORDERS } from '../../Data/Orders';
import { CommonModule } from '@angular/common';

declare var Chart: any;

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements AfterViewInit {
  orders = ORDERS;

  ngAfterViewInit() {
    const statusCounts = {
      Completed: 0,
      Pending: 0,
      Cancelled: 0,
      OutOfDelivery: 0
    };

    // Count each status
    this.orders.forEach(order => {
      if (statusCounts[order.status as keyof typeof statusCounts] !== undefined) {
        statusCounts[order.status as keyof typeof statusCounts]++;
      }
    });

    // Create chart
    new Chart('statusChart', {
      type: 'doughnut',
      data: {
        labels: Object.keys(statusCounts),
        datasets: [{
          data: Object.values(statusCounts),
          backgroundColor: ['#16a34a', '#eab308', '#dc2626', '#2563eb'],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
}
