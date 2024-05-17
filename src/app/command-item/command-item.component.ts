import { Component, Input,OnInit } from '@angular/core';
import { VoiceCommandService } from '../services/voiceCommand/voice-command.service';

@Component({
  selector: 'app-command-item',
  templateUrl: './command-item.component.html',
  styleUrls: ['./command-item.component.scss']
})
export class CommandItemComponent implements OnInit {
  @Input() pharName!: any; 
  @Input() pharCode!: any;
  @Input() tireurNumber!:any; 
  @Input() controlerNumber!:any; 
  @Input() inprimeTime!:any; 
   darkMode:any;

constructor(private voiceCommand:VoiceCommandService){

}  
ngOnInit(): void {
    this.darkMode=this.voiceCommand.darkMode
}

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
