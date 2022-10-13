import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private auth:AuthService) { }

  ngOnInit(): void {
  }
  db(){
    this.router.navigate(['db'])
  }
  live(){
    this.router.navigate(['live'])
  }
  noti(){
    this.router.navigate(['noti'])
  }
  leavapp(){
    this.router.navigate(['leavapp'])
  }
  logout(){
    this.auth.logout();
  }

}
