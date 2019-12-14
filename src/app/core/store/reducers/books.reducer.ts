import { initialState } from '../state/books.state';
import { BooksState } from '../../models';
import { StoreActions } from '../actions/books.action';

export function booksReducer(state = initialState, action): BooksState {

  switch (action.type) {

    case StoreActions.GET_BOOKS_SUCCESS:
        
        let booksList = action.payload;
        return Object.assign({}, state, {
          booksList: [...booksList]
        });

    case StoreActions.ADD_TO_CART_SUCCESS:
        let clone = Object.assign({}, state)
        clone.cart.books = [...[action.payload], ...clone.cart.books];
        clone.cart.order.ids.push(action.payload.id);
        clone.cart.order.total += action.payload.price;
        return clone;

    case StoreActions.REMOVE_FROM_CART_SUCCESS:
          let newState = Object.assign({}, state)
          newState.cart.books = [...action.payload];
          newState.cart.order.total = newState.cart.books.reduce( 
            (price, currentValue) => price + currentValue.price
            , 0 );
          return newState;
      
    default: 
      return state;
      
  }
}