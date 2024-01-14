import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../Services/user-auth.service';
import { NgToastService } from 'ng-angular-popup';


@Injectable({
  providedIn:'root'
})

// export const authGuard: CanActivateFn = (route, state) => {
//   return false;
// };

export class authGuard{
  constructor(private authService:UserAuthService,private router:Router,private toast: NgToastService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.authService.isLogged){
      return true;
    }
    else{
      this.toast.error({
        detail: 'Error',
        summary: 'You must login first',
        duration: 3000,
      });
      this.router.navigate(['Login'])
      return false;
    }

  }

}
