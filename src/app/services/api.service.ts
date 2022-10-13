import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postproduct(data:any){
    return this.http.post<any>("http://localhost:4200/assets/live.json",data);
  }
  getproduct(){
    return this.http.get<any>("http://localhost:4200/assets/live.json");
  }
}
