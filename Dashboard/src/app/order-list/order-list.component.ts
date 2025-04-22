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
    this.renderStatusChart();
    this.renderDateChart();
  }

  renderStatusChart() {
    const statusCounts = { Completed: 0, Pending: 0, Cancelled: 0, OutOfDelivery: 0 };
    this.orders.forEach(order => statusCounts[order.status as keyof typeof statusCounts]++);
    new Chart('statusChart', {
      type: 'doughnut',
      data: {
        labels: Object.keys(statusCounts),
        datasets: [{
          data: Object.values(statusCounts),
          backgroundColor: ['#16a34a', '#eab308', '#dc2626', '#2563eb']
        }]
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });
  }

  renderDateChart() {
    const dateCounts: { [key: string]: number } = {};
    this.orders.forEach(order => {
      dateCounts[order.orderDate] = (dateCounts[order.orderDate] || 0) + 1;
    });
    const dates = Object.keys(dateCounts);
    const counts = Object.values(dateCounts);
    new Chart('dateChart', {
      type: 'bar',
      data: {
        labels: dates,
        datasets: [{
          label: 'Orders',
          data: counts,
          backgroundColor: '#3b82f6'
        }]
      },
      options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    });
  }
}