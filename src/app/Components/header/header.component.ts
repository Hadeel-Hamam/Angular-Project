import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isUserLogged: boolean;

  constructor(private authService: UserAuthService) {
    this.isUserLogged=this.authService.isLogged;

  }

  ngOnInit(): void {
    // this.isUserLogged = this.authService.isLogged;
    this.authService.loggedStatus().subscribe(status=>this.isUserLogged=status)
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
    // this.isUserLogged = this.authService.isLogged;
    this.authService.loggedStatus().subscribe(status=>this.isUserLogged=status)


  }
}
