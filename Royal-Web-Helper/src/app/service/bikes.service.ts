import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


import {Bikes} from '../model/bikes';

@Injectable({
  providedIn: 'root'
})
export class BikesService {

  private bikesUrl = 'http://localhost:8000/bikes';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Bikes[]> {
    return this.http.get<any>(this.bikesUrl);
  }

  get(id: string): Observable<Bikes> {
    return this.http.get<any>(this.bikesUrl + '/' + id);
  }

  create(bikes: Bikes) {
    return this.http.post<any>(this.bikesUrl, bikes);
  }

  update(id: string, bikes: Bikes): Observable<Bikes> {
    return this.http.put<any>(this.bikesUrl + '/' + id, bikes);
  }

  delete(id: string) {
    return this.http.delete<any>(this.bikesUrl + '/' + id);
  }
}
}
