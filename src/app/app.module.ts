import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MstTableComponent } from './mst-table/mst-table.component';
import { MatTableModule } from '@angular/material';
import { ChartComponent } from './chart/chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component' ;
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MstTableComponent,
    ChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
