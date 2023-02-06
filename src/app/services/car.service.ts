import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:7174/api/Car/getall';
  constructor(private httpClient: HttpClient) { }

  getCar():Observable<ListResponseModel<Car>> {
   return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl)
    
  }
}
