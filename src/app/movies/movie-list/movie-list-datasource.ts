import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

export interface MovieListItem {
  title: string;
  description: string;
  cover: string
}


const INITIAL_MOVIES: MovieListItem[] = [
  {
    title: 'The Oval',
    description: 'Action Movie',
    cover:
      'https://fr.web.img4.acsta.net/c_310_420/pictures/19/10/16/16/53/3090773.jpg',
  },
  {
    title: 'Yori Boy',
    description: 'Action Movie MMA',
    cover:
      'https://upload.wikimedia.org/wikipedia/en/b/b4/Boyka_Undisputed.jpg',
  },
  {
    title: 'Casa de Papel',
    description: 'Action Movie',
    cover: 'https://wiflix.biz/wfimages/stream-vf-5f5f-f80a-9cd1-4440.jpg',
  },
  {
    title: 'Free Fight',
    description: 'Action Movie Martial Art',
    cover: 'https://wiflix.biz/wfimages/stream-vf-5f5f-f80a-9cd1-4440.jpg',
  },
  {
    title: 'Pearl Harobour',
    description: 'Japan agains USA 2 WW War',
    cover:
      'https://metro.co.uk/wp-content/uploads/2021/12/pearl-harbor-movie-511e.jpg?quality=90&strip=all&zoom=1&resize=644%2C483',
  },
];

/**
 * Data source for the MovieList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MovieListDataSource extends DataSource<MovieListItem> {
  data: MovieListItem[] = INITIAL_MOVIES;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<MovieListItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: MovieListItem[]): MovieListItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: MovieListItem[]): MovieListItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'title': return compare(a.title, b.title, isAsc);
        case 'description': return compare(a.description, b.description, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
