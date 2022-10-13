import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  login(mail:string, pswd:string) {
    if (mail === 'abc@gmail.com' && pswd === '123456') {
      return 200;
    } else {
      return 403;
    }
  }

  logout(){
    this.router.navigate(['login'])
  }
}
