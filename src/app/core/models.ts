export interface Book {
    id: string,
    title: string,
    author: string,
    isbn: string,
    price: number
}

export interface Order {
    ids: string[],
    total: number
}

export interface BooksState {
    booksList: Book[],
    cart: {
        books: Book[],
        order: Order
    }
}