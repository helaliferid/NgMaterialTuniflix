import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { MoviesPageComponent } from './layouts/movies-page/movies-page.component';
import { AboutPageComponent } from './layouts/about-page/about-page.component';
import { ContactPageComponent } from './layouts/contact-page/contact-page.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'movies',
    component:MoviesPageComponent
  },
  {
    path:'about',
    component:AboutPageComponent
  },
  {
    path:'contact',
    component:ContactPageComponent
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
