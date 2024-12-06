import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Home {
  mainHeading: string;
  mainParagraph: string;
  homeImage: string;
}


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseUrl = 'http://localhost:3000/home';

  constructor(private http: HttpClient) {}


  getHomes(): Observable<Home[]> {
    return this.http.get<Home[]>(`${this.baseUrl}`);

  }



  addHome(data: FormData): Observable<Home> {
    return this.http.post<Home>(this.baseUrl, data);
  }
}




