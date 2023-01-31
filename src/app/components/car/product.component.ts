import { Component } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  cars:Car[]=[];

}
