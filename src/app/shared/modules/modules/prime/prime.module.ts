import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    RippleModule,
    ToastModule,
    ChartModule,
    ButtonModule,
    TableModule,
    TooltipModule,
  ],
})
export class PrimeModule {}
