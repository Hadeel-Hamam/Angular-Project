import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  email: string = '';

  constructor(private authService: UserAuthService, private router: Router) {}

  onRegister(): void {
    this.authService.register(this.username, this.email, this.password);
    this.router.navigate(['/Login']);
  }
}
