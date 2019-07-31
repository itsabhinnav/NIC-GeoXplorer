import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MstTableComponent } from './mst-table/mst-table.component';
import { PieChartComponent } from './pie-chart/pie-chart.component' ;
import { HttpClientModule } from '@angular/common/http';
import { DashComponent } from './dash/dash.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { MatModule } from './matmodule/mat.module';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MstTableComponent,
    PieChartComponent,
    DashComponent,
    BarChartComponent,

  ],
  imports: [
    BrowserModule,
    ChartsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
