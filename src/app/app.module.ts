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
<<<<<<< HEAD
=======
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DescComponent } from './desc/desc.component';

>>>>>>> b0ca7445e5376f8e7227070c53c6bf2c4c1edf12
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MstTableComponent,
    PieChartComponent,
    DashComponent,
    BarChartComponent,
    DescComponent,

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
