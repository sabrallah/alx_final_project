import { Component, OnInit } from '@angular/core';
import { Chart, initTE } from 'tw-elements';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
@Component({
  selector: 'app-bar-chart-horizontal',
  templateUrl: './bar-chart-horizontal.component.html',
  styleUrls: ['./bar-chart-horizontal.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 })),
      ]),
      transition('* <=> *', [
        animate('1000ms', keyframes([
          style({ opacity: 0, offset: 0 }),
          style({ opacity: 1, offset: 0.5 }),
          style({ opacity: 0, offset: 1 }),
        ])),
      ]),
    ]),
  ],
})
export class BarChartHorizontalComponent implements OnInit {
  fadeInState = 'in';
  constructor() { }

  ngOnInit(): void {
    // Initialize TW Elements
    initTE({ Chart });

    // Chart data and options (similar to your code)
    const dataBarHorizontal = {
      type: 'bar',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
        datasets: [
          {
            label: 'Traffic',
            data: [30, 15, 62, 65, 61, 65, 40]
          }
        ]
      }
    };

    const optionsBarHorizontal = {
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            stacked: true,
            grid: {
              display: true,
              borderDash: [2],
              zeroLineColor: 'rgba(0,0,0,0)',
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            },
            ticks: {
              color: 'rgba(0,0,0, 0.5)'
            }
          },
          y: {
            stacked: true,
            grid: {
              display: false
            },
            ticks: {
              color: 'rgba(0,0,0, 0.5)'
            }
          }
        }
      }
    };

    // Create a new Chart instance
    new Chart(
      document.getElementById('bar-chart-horizontal'),
      dataBarHorizontal,
      optionsBarHorizontal
    );
    this.startInfiniteFadeInLoop();
  }

  startInfiniteFadeInLoop(): void {
    setInterval(() => {
      this.fadeInState = this.fadeInState === 'in' ? 'out' : 'in';
    }, 2000); // 2000ms interval for the loop (2 seconds)
  }
}
