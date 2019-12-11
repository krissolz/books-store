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

    case StoreActions.ADD_TO_CART:
        return Object.assign({}, state, {});

    case StoreActions.ORDER_BOOK:
      return Object.assign({}, state, {});
      
    default: 
      return state;
      
  }
}