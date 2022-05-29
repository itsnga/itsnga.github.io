import { Chest } from './../model/chest';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChestService {

  private chestsUrl = 'http://localhost:8000/chests';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Chest[]> {
    return this.http.get<any>(this.chestsUrl);
  }

  get(id: string): Observable<Chest> {
    return this.http.get<any>(this.chestsUrl + '/' + id);
  }

  create(chests: Chest) {
    return this.http.post<any>(this.chestsUrl, chests);
  }

  update(id: string, chests: Chest): Observable<Chest> {
    return this.http.put<any>(this.chestsUrl + '/' + id, chests);
  }

  delete(id: string) {
    return this.http.delete<any>(this.chestsUrl + '/' + id);
  }
}
