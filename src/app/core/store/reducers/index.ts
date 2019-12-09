import { ActionReducerMap, createSelector } from '@ngrx/store';
import { RootState } from '../state/root.state';
import { booksReducer } from './books.reducer';
import { BooksState } from 'src/app/core/models';

export const combineReducers: ActionReducerMap<RootState> = {
  book: booksReducer
}


export const selectBook = (state: RootState) => state.book;

/*

  {
    "id": "string",
    "title": "string",
    "author": "string",
    "isbn": "string",
    "price": 0
  }

*/

export const selectSrc = createSelector(selectBook, (state: BooksState) => state);
export const selectHasSubs = createSelector(selectBook, (state: BooksState) => state);
export const selectSubsId = createSelector(selectBook, (state: BooksState) => state);
export const selectOpts = createSelector(selectBook, (state: BooksState) => {
  return {
    
  };
});