import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import User from "src/app/models/user.model";

@Injectable()
export class AdminGuard implements CanActivate {
    tempUser: any;
    constructor(
        private auth: AuthService
    ) { }

    async canActivate(): Promise<boolean> {
        const res = await fetch('http://localhost:3000/auth/verify', {
            method: 'GET',
            credentials: 'include'
        })
        const data: User = await res.json();
        if (data.is_superuser) {
            this.auth.user = data;
            return true;
        }
        return false;
    }
}
