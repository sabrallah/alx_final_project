import { Injectable,OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MergeArraysService implements OnInit{
  command :any[]=[]
  constructor() { 
   
  }

  ngOnInit(): void {
    
  }
  mergeArrays(data: any): void {
    data.waitingCmd.forEach((firstObj: any) => {
      const matchingSecondObj = data.secteurs.find( (secondObj: any) =>firstObj.EVT_SECT === secondObj.code &&secondObj.nextDepart !== null);
      if (matchingSecondObj) {
        const existingObjIndex = this.command.findIndex((existingObj: any) => existingObj.EVT_SECT === firstObj.EVT_SECT);
        if (existingObjIndex !== -1) {
          const existingObj = this.command[existingObjIndex];
          Object.assign(existingObj, firstObj, matchingSecondObj);
        } else {
          const mergedObj = { ...firstObj, ...matchingSecondObj };
          this.command.push(mergedObj);
        }
      }
    });
  } 


  
  sortByClosestTime(data: any[]): any[] {
    // Sort the data by the closest time
    data.sort((a, b) => {
      const timeA = a.nextDepart.split(':');
      const timeB = b.nextDepart.split(':');

      const hoursA = parseInt(timeA[0], 10);
      const hoursB = parseInt(timeB[0], 10);

      if (hoursA === hoursB) {
        // If hours are the same, compare minutes
        const minutesA = parseInt(timeA[1], 10);
        const minutesB = parseInt(timeB[1], 10);
        return minutesA - minutesB;
      } else {
        return hoursA - hoursB;
      }
    });

    return data;
  }
}
