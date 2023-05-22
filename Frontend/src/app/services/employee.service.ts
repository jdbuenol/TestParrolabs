import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Employee } from '../shared/employee';
import { Result } from '../shared/result';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseurl = environment['backendUrl'] + '/employees';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  GetEmployees(): Observable<Employee>{
    return this.http.get<Employee>(this.baseurl)
    .pipe(retry(1), catchError(this.errorHandl));
  }

  GetEmployee(id: number): Observable<Employee>{
    return this.http.get<Employee>(this.baseurl + '/' + id)
    .pipe(retry(1), catchError(this.errorHandl));
  }

  CreateEmployee(employeeData: Employee){
    return this.http.post<Result>(this.baseurl, JSON.stringify(employeeData), this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandl));
  }

  UpdateEmployee(id: number, employeeData: Employee){
    return this.http.put<Result>(this.baseurl + '/' + id, JSON.stringify(employeeData), this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandl));
  }

  DeleteEmployee(id: number){
    return this.http.delete<Result>(this.baseurl + '/' + id, this.httpOptions)
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
      return error;
    });
  }
}
