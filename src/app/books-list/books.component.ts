import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouterState, Router } from '@angular/router';
import { StoreActions } from 'src/app/core/store/actions/books.action';
import { selectCartBooks, selectBooks, selectCartTotal } from 'src/app/core/store/reducers';
import { Book } from 'src/app/core/models';
import { BooksService } from 'src/app/core/services/books.service';
import { environment } from 'src/environments/environment';

const more: number = environment.more;

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksListComponent implements OnInit {

  books: Book[];
  cart: Book[];
  total: number;
  howMany: number;

  constructor(
    private store$: Store<RouterState>,
    private book$: BooksService,
    private router: Router
  ) {
    this.total = null;
    this.howMany = more;
  }

  viewMore(): void {
    this.howMany += more;
  }

  addToCart(id: string){
    this.store$.dispatch(new StoreActions.AddToCart(id));
  }

  removeFromCart(id: string): void {
    this.store$.dispatch(new StoreActions.RemoveFromCart(id));
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

  goToCart(): void {
    this.router.navigate(['/mycart']);
  }

  ngOnInit() {
    this.store$.dispatch(new StoreActions.GetBooks());
    this.store$.select( selectBooks ).subscribe( books => this.books = books );
    this.store$.select( selectCartBooks ).subscribe( cBooks => { this.cart = cBooks; console.log( this.cart ) } );
    this.store$.select( selectCartTotal ).subscribe( total => this.total = total );
  }

}
