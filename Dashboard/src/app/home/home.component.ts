import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ORDERS } from '../../Data/Orders';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  totalOrders: number = 0;
  totalRevenue: number = 0;
  pendingOrders: number = 0;
  CompletedOrders: number = 0;
  ordersPerMonth: number[] = [];
  revenuePerMonth: number[] = [];

  ngAfterViewInit(): void {
    this.calculateStats();
    this.updateCharts();
  }

  calculateStats() {
    this.totalOrders = ORDERS.length;
    this.totalRevenue = ORDERS.reduce(
      (total, order) => total + order.amount,
      0
    );
    this.pendingOrders = ORDERS.filter(
      (order) => order.status === 'Pending'
    ).length;
    this.CompletedOrders = ORDERS.filter(
      (order) => order.status === 'Completed'
    ).length;

    // Calculate orders and revenue per month
    const ordersByMonth: { [key: string]: number } = {};
    const revenueByMonth: { [key: string]: number } = {};

    ORDERS.forEach((order) => {
      const month = new Date(order.orderDate).toLocaleString('default', {
        month: 'short',
      });
      ordersByMonth[month] = (ordersByMonth[month] || 0) + 1;
      revenueByMonth[month] = (revenueByMonth[month] || 0) + order.amount;
    });

    this.ordersPerMonth = ['Jan', 'Feb', 'Mar', 'Apr'].map(
      (month) => ordersByMonth[month] || 0
    );
    this.revenuePerMonth = ['Jan', 'Feb', 'Mar', 'Apr'].map(
      (month) => revenueByMonth[month] || 0
    );
  }

  updateCharts() {
    new Chart('ordersChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [
          {
            label: 'Orders',
            data: this.ordersPerMonth,
            borderColor: '#3B82F6',
            fill: false,
          },
        ],
      },
    });

    new Chart('revenueChart', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [
          {
            label: 'Revenue (KWD)',
            data: this.revenuePerMonth,
            backgroundColor: '#10B981',
          },
        ],
      },
    });
  }
}
