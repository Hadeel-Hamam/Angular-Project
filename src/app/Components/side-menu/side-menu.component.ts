import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdsService } from 'src/app/Services/ads.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  constructor(private ads: AdsService) {}
  ad: string = '';

  ngOnInit(): void {
    // let observer={
    //   next:(data:string)=>{
    //     console.log(data);
    //   },
    //   error:(err:string)=>{
    //     console.log(err);
    //   },
    //   complete:()=>{
    //     console.log("Done");

    //   }
    // };
    // this.ads.getScheduleAds(3).subscribe(observer);

    // this.subscription= this.ads.getScheduleAds(3).subscribe({
    let adSubscription = this.ads.getScheduleAds(3).subscribe({
      next: (data: string) => {
        console.log(data);
        this.ad = data;
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => {
        console.log('Done');
      },
    });

    this.subscriptions.push(adSubscription);
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
