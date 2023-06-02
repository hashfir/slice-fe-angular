import { Component, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
  @Input() label: any = [];
  @Input() value: any = [];
  @Input() chartLabel: string = '';
  public chart: any;
  constructor() {
    Chart.register(...registerables);
  }
  ngOnInit() {
    this.createChart();
  }

  createChart() {
    const labels = this.label
    const data = {
      labels: labels,
      datasets: [{
        data: this.value,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
        ],
        borderWidth: 1
      }]
    };
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Total Content',
            position:'left'
        },
          legend: {
            display: false // Hide the legend
          },
          tooltip: {
            enabled: false // Disable tooltips
          }
        }
      },

    });

  }
}
