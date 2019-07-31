import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component' ;
import { PieChartComponent } from './pie-chart/pie-chart.component' ;
import { DashComponent} from './dash/dash.component';
import { MstTableComponent} from'./mst-table/mst-table.component';
import {DescComponent} from './desc/desc.component';
const approutes: Routes = [
  {path: '' , redirectTo :'dash',pathMatch:'full'},
  {path:'desc',component:DescComponent},
  {path:'chart', component: BarChartComponent},
  {path:'pie-Chart', component: PieChartComponent},
  {path:'dash', component: DashComponent},
  {path:'mst-table',component:MstTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
