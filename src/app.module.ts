import { Get, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma-service';
import { CreateBookController } from './books/create-book.controller';
import { CreateBookService } from './books/create-book.service';
import { DeleteBookService } from './books/delete-book.service';
import { FindAllBooksService } from './books/find-all-books.service';
import { BookRepository } from './books/books-repository';
import { FIndAllBooksController } from './books/find-all-books.controller';
import { GetBookByIdController } from './books/get-by-id.controller';
import { GetBookByIdService } from './books/get-book-by-id.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    CreateBookController,
    FIndAllBooksController,
    GetBookByIdController,
  ],
  providers: [
    AppService,
    PrismaService,
    CreateBookService,
    DeleteBookService,
    FindAllBooksService,
    BookRepository,
    GetBookByIdService,
  ],
})
export class AppModule {}
