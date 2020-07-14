import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { User } from '../../models/user.model';
import { Store, select } from '@ngrx/store';
import * as fromUser from '../../state/user.reducer';
import * as userActions from '../../state/user.actions';

/**
 * Data source for the UsersList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UsersListDataSource extends DataSource<User> {
  users$: Observable<User[]>;
  error$: Observable<string>;
  users: User[];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(
    private store: Store<fromUser.AppState>
  ) {
    super();
    this.store.dispatch(new userActions.LoadUsers());
    this.users$ = this.store.pipe(select(fromUser.getUsers));
    this.error$ = this.store.pipe(select(fromUser.getError));
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<User[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      this.users$,
      this.paginator.page,
      this.sort.sortChange
    ];
    this.users$.subscribe(res => this.users = res)
    console.log(this.users)
    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.users]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(users: User[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return users.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(users: User[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return users;
    }

    return users.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'firstName': return compare(a.firstName, b.firstName, isAsc);
        case 'lastName': return compare(+a.lastName, +b.lastName, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
