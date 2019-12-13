import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent } from './cart/cart.component';
import { BookComponent } from './book/book.component';

import { StoreModule } from '@ngrx/store';
import { combineReducers } from './core/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreEffects } from 'src/app/core/store/effects/books.effect';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    NotfoundComponent,
    CartComponent,
    BookComponent,
  ],
  imports: [
    StoreModule.forRoot(combineReducers),
    EffectsModule.forRoot([
      StoreEffects
    ]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
