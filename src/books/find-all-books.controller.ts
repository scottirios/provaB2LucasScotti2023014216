import { Controller, Get, HttpCode } from '@nestjs/common';
import { FindAllBooksService } from './find-all-books.service';

@Controller('/books')
export class FIndAllBooksController {
  constructor(private findAllBooks: FindAllBooksService) {}

  @Get()
  @HttpCode(200)
  async handle() {
    const books = await this.findAllBooks.execute();

    return {
      books,
    };
  }
}
