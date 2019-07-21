import { Component, OnInit } from '@angular/core';
import { Bardata } from '../classes/bardata';
import { BardataService } from '../services/bardata.service';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  public data;
  constructor(private bardataservice: BardataService) { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public bardata: Bardata;
  public test: any;
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [], label: ''}
  ];
  getdata(): void {
    this.bardataservice.getdata()
    .subscribe((resp) => {
     this.barChartLabels = resp[0].barchartlabels;
     this.barChartData[0].data = resp[0].data;
     this.barChartData[0].label = resp[0].label;
    });
 }


  ngOnInit() {

   this.getdata();
  }

}
