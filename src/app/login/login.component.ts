import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mail="";
  password="";
  errormsg="";
  faEye=faEye;

  hide:boolean=true;
  

  constructor(private router:Router,private auth:AuthService) { }

  ngOnInit(): void {
  }
  login(){
    if (this.mail.trim().length==0){
      this.errormsg="The email id is required"
    }
    else if (this.password.trim().length==0){
      this.errormsg="The password is required"
    }
    else{
      this.errormsg="";
      let res=this.auth.login(this.mail,this.password);

      if (res==200){
        this.router.navigate(['home']);
      }
      if (res==403){
        this.errormsg="Invalid credentials";
      }
    }

  }

  myf(){
    this.hide=!this.hide;
  }

}
