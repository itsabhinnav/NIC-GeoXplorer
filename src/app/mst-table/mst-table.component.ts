import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TabdataService } from './../services/tabdata.service';

@Component({
  selector: 'app-mst-table',
  templateUrl: './mst-table.component.html',
  styleUrls: ['./mst-table.component.scss']
})
export class MstTableComponent implements OnInit {
 public dataSource= new MatTableDataSource();
 public data;
constructor(private tabDataService:TabdataService){
} 
public displayedColumns = [];
public key=[]
private getdata(): void {
    this.tabDataService.getdata()
    .subscribe((resp) => {
        this.data=resp;
    this.dataSource=this.data;
    for (const key   in resp[0]) {
      this.displayedColumns.push(key);
      }
    });
 }

 @ViewChild(MatSort, {static: true}) sort: MatSort;

 applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();

}
  ngOnInit() {
 this.getdata();
 this.dataSource.sort = this.sort;
  }
}
