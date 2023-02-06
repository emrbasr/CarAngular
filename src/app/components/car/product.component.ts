import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';



import { Observable } from 'rxjs/internal/Observable';
import { CarService } from 'src/app/services/car.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded=false;
  // carResponseModel: CarResponseModel = {
  //   data: this.cars,
  //   message: '',
  //   success: true,
  // };
 

  constructor(private carService:CarService) {}

  ngOnInit(): void {
    this.getCar();
  }
  

  

  getCar() {
    this.carService.getCar().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }
}
