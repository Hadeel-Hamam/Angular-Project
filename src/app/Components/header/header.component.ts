import { CartService } from './../../Services/cart.service';
import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isUserLogged: boolean;
  cartCount:number=0;
  username: string | null = '';

  constructor(private authService: UserAuthService,public cartService:CartService) {
    this.isUserLogged=this.authService.isLogged;

  }

  ngOnInit(): void {
    this.authService.loggedStatus().subscribe(status=>this.isUserLogged=status)
    this.cartCount=this.cartService.getCartCount();
    this.authService.getUsernameObservable().subscribe((username) => {
      this.username = username;
    });
  }
  openNav() {
    document.getElementById('mySidenav')!.style.width = '250px';
    document.body.style.marginLeft = '250px';
  }

  closeNav() {
    document.getElementById('mySidenav')!.style.width = '0px';
    document.body.style.marginLeft = '0px';
  }
  logout(){
    this.authService.logout();
    this.authService.loggedStatus().subscribe(status=>this.isUserLogged=status)


  }
}
