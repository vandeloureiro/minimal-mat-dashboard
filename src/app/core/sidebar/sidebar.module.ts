import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatDividerModule, MatListModule, MatIconModule } from '@angular/material';

import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
