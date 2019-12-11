import { BooksState } from 'src/app/core/models';

export const initialState: BooksState = {
    booksList: [
        {
            id: 'string',
            title: 'string',
            author: 'string',
            isbn: 'string',
            price: 0 
        },
    ],
    cart: {
        books: [],
        order: { 
            ids: [], 
            total: 0 
        }
    }
}