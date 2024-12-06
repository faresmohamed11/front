import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoachesComponent } from './coaches/coaches.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { PricingComponent } from './pricing/pricing.component';
import { LoginComponent } from './login/login.component';
import { DashboaredComponent } from './dashboared/dashboared.component';

const routes: Routes = [
  {path: "" , redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent,title:"Home"},
  {path:"about",component:AboutComponent,title:"About"},
  {path:"coaches",component:CoachesComponent,title:"Coaches"},
  {path:"Contact",component:ContactComponent,title:"Contact"},
  {path:"courses",component:CoursesComponent,title:"Courses"},
  {path:"Pricing",component:PricingComponent,title:"Pricing"},
  {path:"admin",component:LoginComponent,title:"login"},
  {path:"dashboard",component:DashboaredComponent,title:"dash"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration:"enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
