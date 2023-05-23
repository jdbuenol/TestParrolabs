import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Position } from '../shared/position';
import { Result } from '../shared/result';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  baseurl = environment['backendUrl'] + '/positions';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  GetPositions(): Observable<Position>{
    return this.http.get<Position>(this.baseurl)
    .pipe(retry(1), catchError(this.errorHandl));
  }

  GetPosition(id: number): Observable<Position>{
    return this.http.get<Position>(this.baseurl + '/' + id)
    .pipe(retry(1), catchError(this.errorHandl));
  }

  CreatePosition(positionData: Position){
    return this.http.post<Result>(this.baseurl, JSON.stringify(positionData), this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandl));
  }

  UpdatePosition(id: number, positionData: Position){
    return this.http.put<Result>(this.baseurl + '/' + id, JSON.stringify(positionData), this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandl));
  }

  EndContract(id: number) {
    return this.http.put<Result>(this.baseurl + '/' + id + '/endContract', {}, this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandl));
  }

  DeletePosition(id: number){
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
