import { Component, OnInit } from '@angular/core';
import { CoachesService, Coach } from '../services/coaches.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css'],
})
export class CoachesComponent implements OnInit {
  coaches: Coach[] = [];
  baseUrl: string = 'http://localhost:3000';

  constructor(private coachesService: CoachesService) {}

  ngOnInit(): void {
    this.fetchCoaches();
  }

  fetchCoaches(): void {
    this.coachesService.getCoaches().subscribe(
      (data) => {
        this.coaches = data.map((coach) => {
          if (!coach.coachImage.startsWith('http')) {
            coach.coachImage = `${this.baseUrl}/${coach.coachImage}`;
          }
          return coach;
        });
      },
      (error) => {
        console.error('Error fetching coaches:', error);
      }
    );
  }
}
