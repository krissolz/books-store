import { BooksState } from 'src/app/core/models';

export const initialState: BooksState = {
    booksList: [
        {
            id: '',
            title: '',
            author: '',
            isbn: '',
            price: 0 ,
            description: '',
            image: ''
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