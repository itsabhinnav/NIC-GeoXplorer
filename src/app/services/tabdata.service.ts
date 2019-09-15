import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TabdataService {

  apiUrl = 'http://localhost:3000/mst_table';

  getdata(){
    return this.http.get(this.apiUrl);
  }

  constructor(private http : HttpClient) { }
}
