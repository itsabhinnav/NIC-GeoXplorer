import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-mst-table',
  templateUrl: './mst-table.component.html',
  styleUrls: ['./mst-table.component.scss']
})
export class MstTableComponent implements OnInit {
/*  columns = [
    { columnDef: 'id', header: 'id',    cell: (test: Test) => `${test.objectid}` },
    { columnDef: 'stname',     header: 'stname',   cell: (test: Test) => `${test.stname}`     },
    { columnDef: 'stcode',   header: 'stcode', cell: (test: Test) => `${test.stcode}`   },
    { columnDef: 'dtname',   header: 'dtcode', cell: (test: Test) => `${test.dtcode}` }
   ] ;
  displayedColumns = this.columns.map(c => c.columnDef);

tests: Test[] = []; */
  /* customers: Customer[] = [];
  getCustomers(): void {
    this.customerService.getCust()
    .subscribe(customers => (this.customers = customers));
   } */
   /* getObjects(): void {
    this.customerService.getObj()
    .subscribe(tests => (this.tests = tests));
   }
  constructor(private customerService: CustomerService) {}

  ngOnInit() { */
   /*  this.getCustomers();
    console.log(this.displayedColumns); */
   /*  this.getObjects();
  } */
  ngOnInit() {
  }
}
