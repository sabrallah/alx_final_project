import { Component, } from '@angular/core';
import { WeatherService } from '../services/wather/weather.service';

@Component({
  selector: 'app-sleeping-mode',
  templateUrl: './sleeping-mode.component.html',
  styleUrls: ['./sleeping-mode.component.scss']
})
export class SleepingModeComponent {


  city = 'Tetouan'; // Replace with the desired city
  weatherData: any;
  roundedTemperature!: number;
  currentTime!: string;
  secondHandRotation = 0;
  minuteHandRotation = 0;
  hourHandRotation = 0;
  ap:any
  min:any=[];
  currArr:any=[]
  aPs:any=[]

  constructor(private weatherService: WeatherService) {
    this.updateTime();
    setInterval(() => {
      const now = new Date();
      this.secondHandRotation = (now.getSeconds() / 60) * 360;
      this.minuteHandRotation = (now.getMinutes() / 60) * 360 + (now.getSeconds() / 60) * 6;
      this.hourHandRotation = ((now.getHours() % 12) / 12) * 360 + (now.getMinutes() / 60) * 30;
    }, 1000); 
  }

    
  ngOnInit() {

    this.getWeatherData();

        // Update the time every minute
        setInterval(() => {
          this.updateTime();
        }, 60000); // 60,000 milliseconds = 1 minute
  }

  getWeatherData() {
    this.weatherService.getWeather(this.city).subscribe((data) => {
      this.weatherData = data;
      this.roundedTemperature = Math.ceil(this.weatherData.main.temp);
    });
  }




  updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours from 24-hour format to 12-hour format
    const hours12 = hours % 12 || 12;

    // Format the time as "hh:mm AM/PM"
    this.currentTime = `${this.formatTime(hours12)} `;
    this.ap=`${ampm}`
    let mint=`${this.formatTime(minutes)}`
    this.min.length = 0;
    this.min.push(mint) 
    this.currArr.length = 0;
    this.currArr.push(this.currentTime) 
    this.aPs.length=0;
    this.aPs.push(this.ap)
  }

  // Helper function to format time with leading zeros (e.g., 01, 02, 03)
  formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
