import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlipedCardsService {
visibleCards:any = [];
visibleCards1:any = [];
visibleCards2:any = [];
visibleCardsZ:any = [];
visibleCardsNOT:any = [];
currentIndex = 0;
currentIndex1 = 0;
currentIndex2 = 0;
currentIndexZ = 0;
currentIndexNOT = 0;







  showNextSetOfCards(cards:any,cards1:any,cards2:any,cardsZ:any,cardsNOT:any) { 
    const startIndex = this.currentIndex;
    const endIndex = startIndex + 5; 
    this.visibleCards = cards.slice(startIndex, endIndex);
    const startIndex1 = this.currentIndex1;
    const endIndex1 = startIndex1 + 2; 
    this.visibleCards1 = cards1.slice(startIndex1, endIndex1);

    const startIndex2 = this.currentIndex2;
    const endIndex2 = startIndex2 + 2; 
    this.visibleCards2 = cards2.slice(startIndex2, endIndex2);

    const startIndexZ = this.currentIndexZ;
    const endIndexZ = startIndexZ + 10; 
    this.visibleCardsZ = cardsZ.slice(startIndexZ, endIndexZ);

    const startIndexNOT = this.currentIndexNOT;
    const endIndexNOT = startIndexNOT + 5; 
    this.visibleCardsNOT = cardsNOT.slice(startIndexNOT, endIndexNOT);

    setTimeout(() => {

      this.currentIndex += 5;
      if (this.currentIndex >= cards.length) {
        this.currentIndex = 0; 
      } 
      this.currentIndex1 += 2;
      if (this.currentIndex1 >= cards1.length) {
        this.currentIndex1 = 0; 
      }

      this.currentIndex2 += 2;
      if (this.currentIndex2 >= cards2.length) {
        this.currentIndex2 = 0; 
      }

      this.currentIndexZ += 10;
      if (this.currentIndexZ >= cardsZ.length) {
        this.currentIndexZ = 0; 
      }
      this.currentIndexNOT += 5;
      if (this.currentIndexNOT >= cardsNOT.length) {
        this.currentIndexNOT = 0; 
      }
      this.showNextSetOfCards(cards,cards1,cards2,cardsZ,cardsNOT);
    }, 5000); 

  
}
showNextSetOfCardss(cards:any) { 
  const startIndex = this.currentIndex;
  const endIndex = startIndex + 5; 
  let finalCards = cards.slice(startIndex, endIndex);


  setTimeout(() => {
    this.currentIndex += 5;
    if (this.currentIndex >= cards.length) {
      this.currentIndex = 0; 
    } 
    this.showNextSetOfCardss(cards);
  }, 5000); 
return finalCards
}


  constructor() { }
}
