import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  adsList:string[];
  constructor() {
    this.adsList=["Offer 50%","Discount to 60%","White Friday Offers","Special Offer"];


  }

  getScheduleAds(interInSec:number):Observable<string>{
    return new Observable<string>((observer)=>{
      // observer.next();
      // observer.error();
      // observer.complete();
      let counter=0;
      observer.next(this.adsList[counter++]);
      let adsTimer=setInterval(()=>{
        // console.log("inInterval");

        if(counter==this.adsList.length){
          // observer.complete();
          counter = 0;
        }
        if(this.adsList[counter]==""){
          observer.error("Empty Ad")
        }

        observer.next(this.adsList[counter++]);
        // counter++;

      },interInSec*1000);

      return{
        unsubscribe(){
          clearInterval(adsTimer);
          console.log("unsubscribe");

        }
      }
    });
  }
}
