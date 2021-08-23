import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly urlApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.backend.host;
  }

  getBio(): Observable<any> {
    return this.httpClient.get(`${this.urlApi}/biography.json`);
  }


}
