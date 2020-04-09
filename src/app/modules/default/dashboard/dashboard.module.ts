import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule, MatCardModule, MatIconModule } from '@angular/material';
import { HighchartsChartModule } from 'highcharts-angular';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    FlexLayoutModule,
    MatCardModule,
    MatIconModule
  ]
})
export class DashboardModule { }
