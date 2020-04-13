import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { FooterModule } from 'src/app/core/footer/footer.module';
import { HeaderModule } from 'src/app/core/header/header.module';
import { SidebarModule } from 'src/app/core/sidebar/sidebar.module';

@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule,
    SidebarModule,
    MatSidenavModule,
    DefaultRoutingModule,
    RouterModule
  ]
})
export class DefaultModule { }
