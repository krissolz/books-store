import { Action } from '@ngrx/store';

export namespace StoreActions {

  export const GET_BOOKS = 'GET_BOOKS';
  export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
  export const ORDER_BOOK = 'ORDER_BOOK';
  export const ORDER_BOOK_SUCCESS = 'ORDER_BOO_SUCCESS';
  export const ADD_TO_CART = 'ADD_TO_CART';
  export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';

  export class GetBooks implements Action {
    readonly type = GET_BOOKS;
    constructor() { }
  }

  export class GetBooksSuccess implements Action {
    readonly type = GET_BOOKS_SUCCESS;
    constructor(public payload: any) { }
  }

  export class OrderBook implements Action {
    readonly type = ORDER_BOOK;
    constructor() { }
  }

  export class OrderBookSuccess implements Action {
    readonly type = ORDER_BOOK_SUCCESS;
    constructor(public payload: any) { }
  }

  export class AddToCart implements Action {
    readonly type = ADD_TO_CART;
    constructor(public id: any) { }
  }

  export class AddToCartSuccess implements Action {
    readonly type = ADD_TO_CART_SUCCESS;
    constructor(public payload: any) { }
  }

  export type Actions =
    GetBooks |
    GetBooksSuccess |
    OrderBook |
    OrderBookSuccess |
    AddToCart |
    AddToCartSuccess;

}