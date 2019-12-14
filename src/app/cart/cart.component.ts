import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouterState } from '@angular/router';
import { StoreActions } from 'src/app/core/store/actions/books.action';
import { selectCartBooks, selectBooks, selectCartTotal } from 'src/app/core/store/reducers';
import { Book } from 'src/app/core/models';
import { BooksService } from 'src/app/core/services/books.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  books: Book[];
  cart: Book[];
  total: number;

  constructor(
    private store$: Store<RouterState>,
    private book$: BooksService
  ) {
    this.total = null;
  }

  checkBook(id: string): boolean {
    return this.book$.checkCart(id);
  }

  getUnic(cart: Book[]): Book[]{
    return this.book$.getUnicBooks(cart);
  }

  getNumber(id: string) : number {
    return this.book$.getCopiesNumber(id);
  }

  ngOnInit() {
    this.store$.dispatch(new StoreActions.GetBooks());
    this.store$.select( selectBooks ).subscribe( books => this.books = books );
    this.store$.select( selectCartBooks ).subscribe( cBooks => { this.cart = cBooks; console.log( this.cart ) } );
    this.store$.select( selectCartTotal ).subscribe( total => this.total = total );
  }

}
