import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NbButtonModule } from '@nebular/theme';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NbButtonModule,
    NgxDatatableModule,
    FontAwesomeModule,
  ],
})
export class DashboardModule {}
