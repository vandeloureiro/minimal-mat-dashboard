import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { HighchartsChartModule } from 'highcharts-angular';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { WidgetAreaComponent } from './widget-area/widget-area.component';
import { WidgetCardComponent } from './widget-card/widget-card.component';

@NgModule({
  declarations: [DashboardComponent, WidgetAreaComponent, WidgetCardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatDividerModule,
    HighchartsChartModule,
    MatCardModule,
    MatIconModule
  ]
})
export class DashboardModule { }
