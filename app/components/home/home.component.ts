import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.html'
})
export class HomeComponent implements OnInit {
    constructor(private _loggerService: LoggerService) {
        _loggerService.log('Home Component loading success');
     }

    ngOnInit() { }
}