import { Component,Input,OnInit } from '@angular/core';
import { VoiceCommandService } from '../services/voiceCommand/voice-command.service';

@Component({
  selector: 'app-tirage-item',
  templateUrl: './tirage-item.component.html',
  styleUrls: ['./tirage-item.component.scss']
})
export class TirageItemComponent  implements OnInit{
  @Input() qtt!: number; 
  @Input() ligne!: number;
  @Input() tireur!:string; 
  @Input() index!:any;
  @Input() animation!:boolean; 
  darkMode:any;
  constructor(private voiceCommand:VoiceCommandService){
  
  }  
  ngOnInit() {
  this.darkMode=this.voiceCommand.darkMode
  }
}
