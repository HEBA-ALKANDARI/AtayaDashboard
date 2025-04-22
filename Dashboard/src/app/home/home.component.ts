import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    new Chart('ordersChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
          label: 'Orders',
          data: [300, 500, 400, 600],
          borderColor: '#3B82F6',
          fill: false
        }]
      }
    });

    new Chart('revenueChart', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
          label: 'Revenue (KWD)',
          data: [8000, 9000, 11000, 9500],
          backgroundColor: '#10B981'
        }]
      }
    });
  }
}