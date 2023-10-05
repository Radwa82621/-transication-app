import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { ChartComponent } from './components/chart/chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchByAmountPipe } from './shared/pipes/search-by-amount.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MessageService } from 'primeng/api';
import { PrimeModule } from './shared/modules/modules/prime/prime.module';
import { SearchByNamePipe } from './shared/pipes/search-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ChartComponent,
    NavbarComponent,
    SearchByAmountPipe,
    SearchByNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    PrimeModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
