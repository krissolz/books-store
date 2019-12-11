import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouterState } from '@angular/router';
import { StoreActions } from 'src/app/core/store/actions/books.action';
import { selectState } from 'src/app/core/store/reducers';
import { Book } from 'src/app/core/models';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksListComponent implements OnInit {

  books: Book[]

  constructor(
    private store$: Store<RouterState>,
  ) { }

  addToCart(id: string){
    console.log(id);
  }

  ngOnInit() {
    this.store$.dispatch(new StoreActions.GetBooks());
    this.store$.select( (state: any) => state.store ).subscribe( (s:any) => this.books = s.booksList );
  }

}
