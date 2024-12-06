import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Coach {
  coachName: string;
  coachImage: string;
  coachDesc: string;
}

@Injectable({
  providedIn: 'root',
})
export class CoachesService {
  private baseUrl = 'http://localhost:3000/coaches';

  constructor(private http: HttpClient) {}

  getCoaches(): Observable<Coach[]> {
    return this.http.get<Coach[]>(this.baseUrl);
  }

  createCoach(formData: FormData): Observable<any> {
    return this.http.post(this.baseUrl, formData);
  }
}
