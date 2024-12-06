import { Component,OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboared',
  templateUrl: './dashboared.component.html',
  styleUrl: './dashboared.component.css'
})
export class DashboaredComponent implements OnInit {
  user: any;

  constructor(private authService: AuthServiceService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getUser().subscribe(
      (response) => {
        this.user = response;
      },
      (error) => {
        console.error('خطأ أثناء جلب بيانات المستخدم:', error);
      }
    );
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/admin']);
  }

}
