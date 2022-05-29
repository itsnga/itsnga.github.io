import { Injectable } from '@angular/core';
import { Motorcycles } from '../model/motorcycles';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotorcylcesService {

  private motorcyclesUrl = 'http://localhost:8000/motorcycles';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Motorcycles[]> {
    return this.http.get<any>(this.motorcyclesUrl);
  }

  get(id: string): Observable<Motorcycles> {
    return this.http.get<any>(this.motorcyclesUrl + '/' + id);
  }

  create(motorcycle: Motorcycles) {
    return this.http.post<any>(this.motorcyclesUrl, motorcycle);
  }

  update(id: string, motorcycle: Motorcycles): Observable<Motorcycles> {
    return this.http.put<any>(this.motorcyclesUrl + '/' + id, motorcycle);
  }

  delete(id: string) {
    return this.http.delete<any>(this.motorcyclesUrl + '/' + id);
  }
}
