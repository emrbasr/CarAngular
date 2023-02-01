import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

import { CarResponseModel } from 'src/app/models/carModelResponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  cars: Car[] = [];
  apiUrl = 'https://localhost:7174/api/Car/getall';
  // carResponseModel: CarResponseModel = {
  //   data: this.cars,
  //   message: '',
  //   success: true,
  // };
 

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getCar();
  }
  

  
// getLoggedInUser(auth_token): Observable<any> {
//   const headers = new Headers({
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${auth_token}`
//   })
//   return this.httpClient.get(this.apiUrl, { headers: headers })
// }
  getCar() {
    this.httpClient.get<CarResponseModel>(this.apiUrl)
    .subscribe((response) => {
      this.cars = response.data;
    });
  }
}
