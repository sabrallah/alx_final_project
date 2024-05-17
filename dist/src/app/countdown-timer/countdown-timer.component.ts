import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { VoiceCommandService } from '../services/voiceCommand/voice-command.service';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  @Input() initialMinutes!:any; 
  @Input() cp!: number;
  @Input() urg!:boolean; 
   // Input to specify the initial countdown time
  minutes!: number;
  seconds!: number;

  private subscription!: Subscription;
  darkMode:any;
  constructor(private voiceCommand:VoiceCommandService){
  
  }  
 

  ngOnInit() {
    this.resetTimer();
  this.getTimeDifferenceInMinutes(this.initialMinutes)
  this.darkMode=this.voiceCommand.darkMode
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  rounded(){
    Math.round(this.minutes/60)
  }
  getTimeDifferenceInMinutes(targetTime: string): number {
    // Parse the target time string
    const targetParts = targetTime.split(':');
    if (targetParts.length !== 3) {
      throw new Error('Invalid time format. Use HH:mm:ss');
    }
  
    const targetHour = parseInt(targetParts[0], 10);
    const targetMinute = parseInt(targetParts[1], 10);
    const targetSecond = parseInt(targetParts[2], 10);
  
    // Get the current time
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentSecond = now.getSeconds();
  
    // Calculate the time difference in minutes
    const hoursDifference = targetHour - currentHour;
    const minutesDifference = targetMinute - currentMinute;
    const secondsDifference = targetSecond - currentSecond;
  
    const totalMinutesDifference = hoursDifference * 60 + minutesDifference + secondsDifference / 60;
  
    // Round the result to the nearest integer
    const roundedDifference = Math.round(totalMinutesDifference);
  
    return roundedDifference;
  }
  resetTimer() {
  
    if(  this.getTimeDifferenceInMinutes(this.initialMinutes)>0){
      this.minutes =   this.getTimeDifferenceInMinutes(this.initialMinutes);
    } else{
      this.minutes =   this.getTimeDifferenceInMinutes(this.initialMinutes)*-1
    }
    this.seconds = 0;

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = interval(1000).subscribe(() => {
      if (this.minutes === 0 && this.seconds === 0) {
        // Timer has reached 0
        this.subscription.unsubscribe();
      } else if (this.seconds === 0) {
        // Decrement the minutes and set seconds to 59
        this.minutes--;
        this.seconds = 59;
      } else {
        this.seconds--;
      }
    });
  }
}
