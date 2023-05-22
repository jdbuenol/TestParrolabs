import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { EducationLevel } from '../shared/educationLevel';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducationLevelService {
  baseurl = environment['backendUrl'] + '/educationLevels';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  GetEducationLevels(): Observable<EducationLevel>{
    return this.http.get<EducationLevel>(this.baseurl)
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
