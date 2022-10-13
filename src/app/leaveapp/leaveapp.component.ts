import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-leaveapp',
  templateUrl: './leaveapp.component.html',
  styleUrls: ['./leaveapp.component.css']
})
export class LeaveappComponent implements OnInit {
  productdata !:any;


  constructor(private router:Router,private api:ApiService) { }

  ngOnInit(): void {
    this.allproducts();
  }
  allproducts(){
    this.api.getproduct().subscribe({
      next:(res)=>{this.productdata=res;
      }
    })
  }

}
