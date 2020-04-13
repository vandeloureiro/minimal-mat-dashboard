import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

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
