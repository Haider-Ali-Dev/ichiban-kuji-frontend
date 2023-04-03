import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import User from "src/app/models/user.model";
import { AuthService } from "../auth.service";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) { }
    async canActivate(): Promise<boolean | UrlTree> {
        try {
            const res = await fetch('http://localhost:3000/auth/verify', {
                method: 'GET',
                credentials: 'include'
            })
            const data: User = await res.json();
            if (data.id.length) {
                this.auth.user = data;
                return true;
            }
        } catch {
            return this.router.parseUrl('/signin');
        }

        return this.router.parseUrl('/signin');
    }

}
