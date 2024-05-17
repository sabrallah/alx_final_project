import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
@Component({
  selector: 'app-flip-componenet',
  templateUrl: './flip-componenet.component.html',
  styleUrls: ['./flip-componenet.component.scss'],
  animations: [
    trigger('flipAnimation', [
      state('front', style({ transform: 'rotateY(0deg)' })),
      state('back', style({ transform: 'rotateY(180deg)' })),
      transition('front <=> back', animate('0.5s ease')),
    ]),
  ]
})
export class FlipComponenetComponent implements OnInit {
  cards: any[] = []; // Your card data
  visibleCards: any[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];


  constructor() {}

  ngOnInit(): void {
    this.cards =[
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
    ]
    this.showNextSetOfCards();
  }
  currentIndex = 0;
  showNextSetOfCards() {
    const startIndex = this.currentIndex;
    const endIndex = startIndex + 5; // Show 5 cards at a time

    this.visibleCards = this.cards.slice(startIndex, endIndex);

    // After 5 seconds, automatically flip to the next set of cards
    setTimeout(() => {
      this.currentIndex += 5;
      if (this.currentIndex >= this.cards.length) {
        this.currentIndex = 0; // Loop back to the beginning
      }
      this.showNextSetOfCards();
    }, 5000); // 5000 milliseconds (5 seconds)
  }
}

