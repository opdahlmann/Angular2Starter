import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { LoggerService } from './logger.service';
// export class Car {
//   constructor(public id: number, public name: string, public side: string) { }
// }
export class Car {
    constructor(
        public brand: string,
        public color: string
    ){}
}



@Injectable()
export class CarsService {
   constructor(private _http: Http, private _loggerService: LoggerService) { }

public getCars(value?: string) {
    return this._http.get('./app/assets/cars.json')
      .map((response: Response) => <Car[]>response.json().data)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    this._loggerService.log(error.toString());
    return Observable.throw(error.json().error || 'Server error');
  }
}