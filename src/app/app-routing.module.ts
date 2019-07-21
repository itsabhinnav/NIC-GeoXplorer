import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component' ;
import { PieChartComponent } from './pie-chart/pie-chart.component' ;

const approutes: Routes = [
  {path: 'Chart', component: BarChartComponent},
  {path: 'pie-Chart', component: PieChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
