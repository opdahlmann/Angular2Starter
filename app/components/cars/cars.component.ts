import { 
  Component, 
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate,
  group
} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Car, CarsService} from '../../services/cars.service'
import { LoggerService } from '../../services/logger.service';
import animations from '../../shared/animations';
import {Title} from "@angular/platform-browser";

@Component({
    moduleId: module.id,
    selector: 'cars',
    templateUrl: 'cars.html',
    animations: (animations)
})
export class CarsComponent implements OnInit {
    cars: Promise<Car[]>;
    selectedCar: Car;
    
    constructor(private _carsService: CarsService, private _loggerService: LoggerService,private _title : Title) {   _loggerService.log('Cars Component loading success'); }

    ngOnInit() 
    { 
      this._title.setTitle('Cars');
        this.getCars();
    }

  getCars(value?: string) {
    this.cars = this._carsService.getCars(value);
    }

  select(car: Car) {
    this.selectedCar = car;
  }

  closeSelected() {
    this.selectedCar = null;
  }
}