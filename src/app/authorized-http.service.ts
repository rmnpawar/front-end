import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './Service/authentication.service';
import { Observable } from 'rxjs';
import { CustomOptions } from './Models/customoptions';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedHttpService {

  options: CustomOptions = {};
  token: string;


  constructor(public http: HttpClient) {
  }

  private setup() {
    this.options.headers = new HttpHeaders({"Authorization": "Bearer " + this.token});
  }

  public Get<T>(endPoint: string) : Observable<T> {
    this.setup();
    return this.http.get<T>(endPoint, this.options);
  }


  public Post<T>(endPoint: string, params: Object) : Observable<T> {
    this.setup();
    return this.http.post<T>(endPoint, params, this.options);
  }


  public Put<T>(endPoint: string, params: Object) : Observable<T> {
    this.setup();
    return this.http.put<T>(endPoint, params, this.options);
  }


  public Delete<T>(endPoint: string) : Observable<T> {
    this.setup();
    return this.http.delete<T>(endPoint, this.options);
  }

  public setToken(token:string) {
    this.token = token;
  }
}
