import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthenticateService } from './shared/user/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fbNgClone';
  currentUser?: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map((result: any) => result.matches),
      shareReplay()
    );



  constructor(
    private breakpointObserver: BreakpointObserver,
    private authenticationService: AuthenticateService
  ) { }


  ngOnInit(): void {
    this.authenticationService.currentUser$.subscribe({
      next: (user) => {
        this.currentUser = user
      }
    })
  }

 
}
