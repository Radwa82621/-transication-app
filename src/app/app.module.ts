import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { ChartComponent } from './components/chart/chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import{ReactiveFormsModule}from '@angular/forms'
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableModule } from 'primeng/table';
import {HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ChartComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
