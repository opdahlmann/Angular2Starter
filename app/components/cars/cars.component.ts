import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Car, CarsService} from '../../services/cars.service'
import { LoggerService } from '../../services/logger.service';

@Component({
    moduleId: module.id,
    selector: 'cars',
    templateUrl: 'cars.html'
})
export class CarsComponent implements OnInit {
    cars: Promise<Car[]>;
    selectedCar: Car;
    
    constructor(private _carsService: CarsService, private _loggerService: LoggerService) {   _loggerService.log('Cars Component loading success'); }

    ngOnInit() 
    { 
        this.getCars();
    }

  getCars(value?: string) {
    this.cars = this._carsService.getCars(value);
    }

  select(car: Car) {
    this.selectedCar = car;
  }
}