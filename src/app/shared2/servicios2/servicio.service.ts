import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private httpClient : HttpClient) { }

  public recuperarEntradas() : Observable<any>{
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/comments');
  }
}
