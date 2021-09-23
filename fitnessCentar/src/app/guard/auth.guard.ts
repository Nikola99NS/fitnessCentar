import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {

    //injectovali
    constructor(private router: Router) {

    }
//radi kao interceptor
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (localStorage.getItem("token")) {
            console.log("ima token", localStorage.getItem("token") )
            return true;
        }
        console.log("nema token", localStorage.getItem("token") )
        this.router.navigate(['login'])
    }

}