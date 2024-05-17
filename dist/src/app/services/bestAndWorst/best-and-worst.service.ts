import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BestAndWorstService {
  best3T  :any[] = [];
  worst3T :any[] = [];
  constructor() { }


  getBestAndWorst(data:any) {
    this.best3T = this.getTop3ByLigne(data.tirStats);
    this.worst3T= this.getBottom3ByLigne(data.tirStats.sort((a:any, b:any) => a.LIGNE- b.LIGNE));
    let a = Math.floor(Math.random()*10)
    setTimeout(() => {
       if(a%2===0){
        this.best3T=this.best3T.map((item:any)=>{
          item.QTE=item.QTE+2; 
          item.LIGNE%2===0? item.LIGNE=item.LIGNE+25:item.LIGNE=item.LIGNE+20; 
        })
        this.worst3T=this.worst3T.map((item:any)=>{   
           item.QTE=item.QTE+1; 
          item.LIGNE%2===0? item.LIGNE=item.LIGNE+15:item.LIGNE=item.LIGNE+10; })
       }else{
        this.best3T=this.worst3T.map((item:any)=>{   
          item.QTE=item.QTE+1; 
         item.LIGNE%2===0? item.LIGNE=item.LIGNE+15:item.LIGNE=item.LIGNE+10; })
        this.worst3T=this.worst3T.map((item:any)=>{   
          item.QTE=item.QTE+2; 
         item.LIGNE%2===0? item.LIGNE=item.LIGNE+25:item.LIGNE=item.LIGNE+20; })
       }
      this.getBestAndWorst(data)   
    }, 5000);
  }

  getTop3ByLigne(arr:any) {
    arr?.sort((a:any, b:any) => b.LIGNE - a.LIGNE);
    return arr?.slice(0, 3);
  }
  getBottom3ByLigne(arr: any[]) {
    arr.sort((a, b) => a.LIGNE - b.LIGNE);
    return arr.slice(0, 3)
  }
}
