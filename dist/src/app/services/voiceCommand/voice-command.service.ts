import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoiceCommandService {
  animation = true; 
  recognition: any;
  sleep = false; 
  tirage=false;
  bestOfTirage=false;
  darkMode=false;
  constructor() { }


  setupVoiceRecognition(): void {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();

      this.recognition.onresult = (event: any) => {
        const command = event.results[0][0].transcript.toLowerCase();
        if (command.includes('start animation')) {
          this.animation= true;
        } else if (command.includes('stop animation')) {
          this.animation = false;
        }else if (command.includes('sleep')) {
          this.sleep = true;
        } else if (command.includes('wake up')) {
          this.sleep = false;
        } else if (command.includes('first card')) {
          this.tirage = true;
        } else if (command.includes('back home')) {
          this.bestOfTirage = false;
          this.tirage = false;
        }  else if (command.includes('best employee')) {
          this.bestOfTirage = true;
        }  else if (command.includes('dark mode')) {
          this.darkMode=true;
        }  else if (command.includes('light mode')) {
          this.darkMode=false;
        } 
      };

      this.recognition.onend = () => {
        this.startListening();
      };
      this.startListening();
    } else {
      alert('Web Speech API is not supported in this browser.');
    }
  }
  startListening(): void {
    this.recognition.start();
  }

  stopListening(): void {
    this.recognition.stop();
  }

}
