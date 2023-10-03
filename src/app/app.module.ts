import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { ChartComponent } from './components/chart/chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import{FormsModule, ReactiveFormsModule}from '@angular/forms'
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableModule } from 'primeng/table';
import {HttpClientModule } from '@angular/common/http';
import { ChartModule} from 'primeng/chart';
import { SearchPipe } from './shared/pipes/search.pipe';
import { SearchByAmountPipe } from './shared/pipes/search-by-amount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ChartComponent,
    NavbarComponent,
    SearchPipe,
    SearchByAmountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonModule,
    TableModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
