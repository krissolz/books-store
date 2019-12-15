import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterState } from '@angular/router';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import { StoreActions } from 'src/app/core/store/actions/books.action';
import { selectCartBooks, selectBooks, selectCartTotal } from 'src/app/core/store/reducers';
import { Book } from 'src/app/core/models';
import { BooksService } from 'src/app/core/services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  id: number;
  book: Book;
  cart: Book[];
  books: Book[];
  total: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store$: Store<RouterState>,
    private book$: BooksService
  ) {
    this.id = null;
    this.total = null;
    this.book = null;
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

    let sub = this.route.paramMap.pipe( map( (params: ParamMap) => params.get('id') ) );

    this.store$.dispatch(new StoreActions.GetBooks());
    this.store$.select( selectCartBooks ).subscribe( cBooks => { this.cart = cBooks; } );
    this.store$.select( selectCartTotal ).subscribe( total => this.total = total );

    combineLatest(this.store$.select( selectBooks ), sub)
      .pipe( map( res => res ) )
      .subscribe( 
        res => { this.book = res[0][+res[1] - 1]; this.books = res[0]; }, 
        err => console.log(err) 
      );

  }

}
