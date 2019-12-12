import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouterState } from '@angular/router';
import { StoreActions } from 'src/app/core/store/actions/books.action';
import { selectCartBooks, selectBooks, selectCartTotal } from 'src/app/core/store/reducers';
import { Book } from 'src/app/core/models';
import { BooksService } from 'src/app/core/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksListComponent implements OnInit {

  books: Book[];
  cart: Book[];
  total: number;
  year: number;

  constructor(
    private store$: Store<RouterState>,
    private book$: BooksService
  ) {
    this.total = null;
    this.year = Date.now();
  }

  addToCart(id: string){
    this.store$.dispatch(new StoreActions.AddToCart(id));
  }

  checkBook(id: string): boolean {
    return this.book$.checkCart(id);
  }

  ngOnInit() {
    this.store$.dispatch(new StoreActions.GetBooks());
    this.store$.select( selectBooks ).subscribe( books => this.books = books );
    this.store$.select( selectCartBooks ).subscribe( cBooks => { this.cart = cBooks; console.log( this.cart ) } );
    this.store$.select( selectCartTotal ).subscribe( total => this.total = total );
  }

}
