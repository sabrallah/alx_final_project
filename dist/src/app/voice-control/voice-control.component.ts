import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voice-control',
  templateUrl: './voice-control.component.html',
  styleUrls: ['./voice-control.component.scss']
})
export class VoiceControlComponent implements OnInit {
  animation = false; // The variable you want to control
  recognition: any;

  constructor() {}

  ngOnInit(): void {
    this.setupVoiceRecognition();
  }

  setupVoiceRecognition(): void {
    // Check if the browser supports the Web Speech API
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      // Use type assertion to indicate that these properties exist on window
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();

      this.recognition.onresult = (event: any) => {
        const command = event.results[0][0].transcript.toLowerCase();
        if (command.includes('start animation')) {
          this.animation= true;
        } else if (command.includes('stop animation')) {
          this.animation = false;
        }
      };

      this.recognition.onend = () => {
        // Automatically start listening again when it ends
        this.startListening();
      };

      // Start listening for voice commands
      this.startListening();
    } else {
      // Web Speech API not supported in this browser
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
