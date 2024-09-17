import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NgToastService } from 'ng-angular-popup';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private isLoggedSubject: BehaviorSubject<boolean>;
  private usernameSubject: BehaviorSubject<string | null>;

  constructor( private toast: NgToastService) {
    this.isLoggedSubject = new BehaviorSubject<boolean>(this.isLogged);
    this.usernameSubject = new BehaviorSubject<string | null>(this.getUsername());
  }

  register(username: string,email: string, password: string): void {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);
    this.toast.success({
      detail: 'Successfully',
      summary: 'Registration successful',
      duration: 3000,
    });
  }

  login(username: string, password: string): boolean {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername === username && storedPassword === password) {
      const userToken = '516512';
      localStorage.setItem('token', userToken);
      this.isLoggedSubject.next(true);
      this.usernameSubject.next(username);
      return true;
    } else {
      this.toast.error({
        detail: 'Error',
        summary: 'Invalid credentials',
        duration: 3000,
      });
      this.isLoggedSubject.next(false);
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    // localStorage.removeItem('username');
    // localStorage.removeItem('password');
    this.isLoggedSubject.next(false);
    this.usernameSubject.next(null);
  }

  get isLogged(): boolean {
    return !!localStorage.getItem('token');
  }

  loggedStatus(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  getUsernameObservable(): Observable<string | null> {
    return this.usernameSubject.asObservable();
  }
}

