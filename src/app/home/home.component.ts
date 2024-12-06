import { Component, OnInit } from '@angular/core';
import { HomeService , Home } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  homes: Home[] = [];
  baseUrl: string = 'http://localhost:3000';

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.fetchHomes();
  }

  fetchHomes(): void {
    this.homeService.getHomes().subscribe(
      (data) => {

        this.homes  =data;
        if (!this.homes[0].homeImage.startsWith('http')) {
          this.homes[0].homeImage = `${this.baseUrl}${this.homes[0].homeImage}`;
        }

        console.log('تم جلب البيانات:', this.homes);
        console.log(this.homes[0].homeImage)


      },
      (error) => {
        console.error('خطأ أثناء جلب البيانات:', error);
      }
    );
  }


}

