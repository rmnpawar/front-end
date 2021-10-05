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


  constructor(public http: HttpClient) {}

  private initializeHeaders() {
    this.options.headers = new HttpHeaders({"Authorization": "Bearer " + this.token});
  }

  private setupHeaders(headers: {}) {
    Object.keys(headers).forEach((key) => {
      this.options.headers.append(key, headers[key]);
    })
  }

  private setupParameters(parameters: {}) {
    this.options.params = new HttpParams(parameters);
  }

  public Get<T>(endPoint: string, options?: CustomOptions) : Observable<T> {
    if (options) {
      this.setupParameters(options.params);
    }

    if (options?.headers) {
      this.setupHeaders(options.headers);
    }

    return this.http.get<T>(endPoint, this.options);
  }


  public Post<T>(endPoint: string, params: Object) : Observable<T> {
    // this.setup();
    return this.http.post<T>(endPoint, params, this.options);
  }


  public Put<T>(endPoint: string, params: Object) : Observable<T> {
    // this.setup();
    return this.http.put<T>(endPoint, params, this.options);
  }


  public Delete<T>(endPoint: string) : Observable<T> {
    // this.setup();
    return this.http.delete<T>(endPoint, this.options);
  }

  public setToken(token:string) {
    this.token = token;
    this.initializeHeaders();
  }
}
