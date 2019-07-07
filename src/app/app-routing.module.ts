import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component' ;
import { PieChartComponent } from './pie-chart/pie-chart.component' ;

const approutes: Routes = [
  {path: 'Chart', component: ChartComponent},
  {path: 'pie-Chart', component: PieChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
