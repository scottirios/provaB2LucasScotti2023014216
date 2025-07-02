import { ConflictException, Injectable } from '@nestjs/common';
import { BookRepository } from './books-repository';

interface CreateBookServiceRequest {
  title: string;
  author: string;
  publicationYear: number;
  isbn: string;
}

@Injectable()
export class CreateBookService {
  constructor(private booksRepository: BookRepository) {}

  async execute({
    title,
    author,
    publicationYear,
    isbn,
  }: CreateBookServiceRequest): Promise<void> {
    const TitleWithSameName = await this.booksRepository.findByTitle(title);

    if (TitleWithSameName) {
      throw new ConflictException('Book with same title already exists.');
    }

    const isbnAlreadyExists = await this.booksRepository.findByISBN(isbn);

    if (isbnAlreadyExists) {
      throw new ConflictException('Book with same ISBN already exists.');
    }

    await this.booksRepository.create({ title, author, publicationYear, isbn });
  }
}
