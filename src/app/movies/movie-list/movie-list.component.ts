import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { IMovie } from '../movie-container/movie-container.component';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements AfterViewInit {
   @Input()dataSource: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['title', 'description','cover','actions'];

  constructor() {
    this.dataSource=[]
  }

  ngAfterViewInit(): void {
    
  }
}
