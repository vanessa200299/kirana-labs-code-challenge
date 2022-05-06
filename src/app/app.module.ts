import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { PickCsvFileComponent } from './components/pick-csv-file/pick-csv-file.component';
import { CsvFileInfoComponent } from './components/csv-file-info/csv-file-info.component';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { PersonService } from './services/person.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { WelcomeMessageComponent } from './components/welcome-message/welcome-message.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [ 
    AppComponent,
    MainComponent,
    PickCsvFileComponent,
    CsvFileInfoComponent,
    PersonTableComponent,
    WelcomeMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule
    
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

