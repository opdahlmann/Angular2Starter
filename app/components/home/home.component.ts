import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import {Title} from "@angular/platform-browser";

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.html'
})
export class HomeComponent implements OnInit {
    constructor(private _loggerService: LoggerService, private _title : Title) {
        _loggerService.log('Home Component loading success');
     }

    ngOnInit() { 
       this._title.setTitle("Home Page");
    }
}