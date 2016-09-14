import { NgModule } from '@angular/core';
import { BrowserModule, Title  } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

/* App component and routing */
import { AppComponent } from './app.component';
import { routing } from './app.routes'; 

/* Services */
import { LoggerService } from './services/logger.service';
import { CarsService} from './services/cars.service'

/* App Components */
import { HomeComponent }      from './components/home/home.component';
import { MenuComponent }      from './components/menu/menu.component';
import { CarsComponent }      from './components/cars/cars.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        JsonpModule,
        routing
    ],
    exports: [ AppComponent ],
    declarations: [AppComponent, HomeComponent, MenuComponent, CarsComponent],
    providers: [LoggerService, CarsService, Title],
    bootstrap: [AppComponent],
})


export class AppModule { }
