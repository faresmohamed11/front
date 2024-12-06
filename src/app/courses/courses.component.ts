import { Component, OnInit } from '@angular/core';
import { CoursesService, Course } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  baseUrl: string = '';

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses(): void {
    
    this.coursesService.getCourses().subscribe({
      next: (data) => {
        this.courses = data.map((course) => ({
          ...course,
          courseImage: `${this.baseUrl}${course.courseImage}`,

        }));
        console.log(this.courses[0].courseImage)
      },
    error: (error) => console.error('Error fetching courses:', error)
  });
  }
}
