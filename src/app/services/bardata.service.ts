import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bardata } from '../classes/bardata';

@Injectable({
  providedIn: 'root'
})
export class BardataService {

  apiUrl = 'http://localhost:3010/bardata';

  getdata(): Observable<Bardata> {
    return this.http.get<Bardata>(this.apiUrl);
  }
  constructor(private http: HttpClient) { }
}
