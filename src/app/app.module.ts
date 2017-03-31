import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopContainerComponent } from './top-container/top-container.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { StockListComponent } from './stock-list/stock-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopContainerComponent,
    SidebarMenuComponent,
    DashboardComponent,
    ChartComponent,
    StockListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
