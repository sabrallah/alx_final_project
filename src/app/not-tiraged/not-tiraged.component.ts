import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-tiraged',
  templateUrl: './not-tiraged.component.html',
  styleUrls: ['./not-tiraged.component.scss']
})
export class NotTiragedComponent {
  @Input() pharName!: any; 
  @Input() pharCode!: any;
  @Input() inprimeTime!:any; 
  @Input() animation!:boolean; 
  @Input() index!:number; 

  calculateTimeDifference(inputTime: string): string {
    // Get the current date and time
    const currentTime = new Date();
  
    // Extract the hours and minutes from the input time string
    const inputHours = parseInt(inputTime.substring(0, 2), 10);
    const inputMinutes = parseInt(inputTime.substring(2, 4), 10);
  
    // Set the current date and time to match the input hours and minutes
    currentTime.setHours(inputHours, inputMinutes, 0, 0);
  
    // Calculate the time difference in milliseconds
    const timeDifferenceMs = currentTime.getTime() - Date.now();
  
    // Check if the time is in the past or future
    const isPast = timeDifferenceMs < 0;
    const isFuture = timeDifferenceMs > 0;
  
    // Calculate the absolute time difference
    const absoluteDifferenceMs = Math.abs(timeDifferenceMs);
  
    // Calculate hours and minutes
    const hours = Math.floor(absoluteDifferenceMs / 3600000);
    const minutes = Math.floor((absoluteDifferenceMs % 3600000) / 60000);
  
    // Construct the result string
    let result = '';
  
    if (isPast) {
      result += '';
    } else if (isFuture) {
      result += ' ';
    }
  
    if (hours > 0) {
      result += `${hours} H${hours > 1 ? '' : ''} `;
    }
  
    if (minutes > 0) {
      result += `${minutes} M${minutes > 1 ? '' : ''}`;
    }
  
    return result.trim();
  }
}
