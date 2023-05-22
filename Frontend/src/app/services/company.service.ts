import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponseBase } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Company } from '../shared/company';
import { Result } from '../shared/result';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  baseurl = environment['backendUrl'] + '/companies';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  GetCompanies(): Observable<Company>{
    return this.http.get<Company>(this.baseurl)
    .pipe(retry(1), catchError(this.errorHandl));
  }

  GetCompany(id: number): Observable<Company>{
    return this.http.get<Company>(this.baseurl + '/' + id)
    .pipe(retry(1), catchError(this.errorHandl));
  }

  CreateCompany(name: string, address: string, zipCode: string){
    return this.http.post<Result>(this.baseurl, JSON.stringify({ "name": name, "address": address, "zipCode": zipCode }), this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandl));
  }

  errorHandl(error: any){
    let errMsg = '';
    if(error.error instanceof ErrorEvent) {
      errMsg = error.error.message;
    } else {
      errMsg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errMsg);
    return throwError(() => {
      return errMsg;
    });
  }
}
