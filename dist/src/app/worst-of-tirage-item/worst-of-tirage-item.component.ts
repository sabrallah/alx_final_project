import { Component, Input,OnInit } from '@angular/core';
import { VoiceCommandService } from '../services/voiceCommand/voice-command.service';

@Component({
  selector: 'app-worst-of-tirage-item',
  templateUrl: './worst-of-tirage-item.component.html',
  styleUrls: ['./worst-of-tirage-item.component.scss']
})
export class WorstOfTirageItemComponent implements OnInit {
  @Input() qtt!: number; 
  @Input() ligne!: number;
  @Input() tireur!:string; 
  @Input() animation!:boolean; 

  darkMode:any;
  constructor(private voiceCommand:VoiceCommandService){
  
  }  
 

  ngOnInit() {
  this.darkMode=this.voiceCommand.darkMode
  }
}
