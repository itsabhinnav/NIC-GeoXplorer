import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component' ;
import { PieChartComponent } from './pie-chart/pie-chart.component' ;
import { DashComponent} from './dash/dash.component';

const approutes: Routes = [
  {path: '' , redirectTo :'dash',pathMatch:'full'},
  {path: 'Chart', component: BarChartComponent},
  {path: 'pie-Chart', component: PieChartComponent},
  {path: 'dash', component: DashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
