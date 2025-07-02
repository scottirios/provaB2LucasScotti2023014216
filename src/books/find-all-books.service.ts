import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BookRepository } from './books-repository';

export interface Book {
  id: string;
  title: string;
  author: string;
  publicationYear: number;
  isbn: string;
  createdAt: string | Date | undefined;
  updatedAt: string | Date | null | undefined;
}

type FindAllBooksServiceResponse = {
  books: Book[];
};

@Injectable()
export class FindAllBooksService {
  constructor(private booksRepository: BookRepository) {}

  async execute(): Promise<FindAllBooksServiceResponse[] | any> {
    const books = await this.booksRepository.findAll();

    const newBooks: Book[] = [];

    if (!books) {
      throw new HttpException('Books not found.', HttpStatus.NOT_FOUND);
    }

    for (const book of books) {
      newBooks.push({
        id: book.id?.toString() || '',
        title: book.title,
        author: book.author,
        publicationYear: book.publicationYear,
        isbn: book.isbn,
        createdAt: book.createdAt ? new Date(book.createdAt) : undefined,
        updatedAt: book.updatedAt ? new Date(book.updatedAt) : undefined,
      });
    }

    return {
      books: newBooks,
    };
  }
}
