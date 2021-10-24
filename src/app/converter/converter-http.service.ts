import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterHttpService {

  api: string;

  constructor(private http: HttpClient) {
    this.api = `${environment.baseUrl}/converter/`;
  }

  getArabicDigit(romanDigit: string): Observable<any> {
    return this.http.get(this.api.concat(romanDigit));
  }
}
