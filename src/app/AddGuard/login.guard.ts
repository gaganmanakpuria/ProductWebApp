import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductAppService } from '../Services/product-app.service';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private productAppService:ProductAppService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem("jwt");

      // if (token && !this.jwtHelper.isTokenExpired(token)){

      //   return true;

      // }

      // this.router.navigate(["/"]);
      // window.location.reload();

      // return false;
     

      return this.productAppService.isLoggedin();
  }
  
}
