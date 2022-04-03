import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MainWidgetComponent } from './components/main-widget/main-widget.component';
import { ListingsComponent } from './components/listings/listings.component';

@NgModule({
  declarations: [HomeComponent, MainWidgetComponent, ListingsComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
