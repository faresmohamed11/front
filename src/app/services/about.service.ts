import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface about {
  mainVideo: string;
  mainParagraph: string;
  aboutImage: string;
}

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private baseUrl = 'http://localhost:3000/about';

  constructor(private http: HttpClient) {}


  getabouts(): Observable<about[]> {
    return this.http.get<about[]>(`${this.baseUrl}`);

  }



  addabout(data: FormData): Observable<about> {
    return this.http.post<about>(this.baseUrl, data);
  }
}
