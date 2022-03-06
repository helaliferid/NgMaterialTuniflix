import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MoviesModule } from '../movies/movies.module';
import { UserModule } from '../shared/user/user.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HomePageComponent,
    ContactPageComponent,
    MoviesPageComponent,
    AboutPageComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MoviesModule,
    UserModule
  ],
  exports:[
    HomePageComponent,
    ContactPageComponent,
    MoviesPageComponent,
    AboutPageComponent,
    FooterComponent
  ]
})
export class LayoutsModule { }
