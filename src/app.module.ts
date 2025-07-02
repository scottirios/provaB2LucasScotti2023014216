import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateBookController } from './books/create-book.controller';
import { CreateBookService } from './books/create-book.service';
import { DeleteBookService } from './books/delete-book.service';
import { FindAllBooksService } from './books/find-all-books.service';
import { BookRepository } from './books/books-repository';
import { FIndAllBooksController } from './books/find-all-books.controller';
import { GetBookByIdController } from './books/get-by-id.controller';
import { GetBookByIdService } from './books/get-book-by-id.service';
import { DeleteBookController } from './books/delete-book.controller';
import { EditBookController } from './books/edit-book.controller';
import { EditBookService } from './books/edit-book.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    CreateBookController,
    FIndAllBooksController,
    GetBookByIdController,
    DeleteBookController,
    EditBookController,
  ],
  providers: [
    AppService,
    PrismaService,
    CreateBookService,
    DeleteBookService,
    FindAllBooksService,
    BookRepository,
    GetBookByIdService,
    EditBookService,
  ],
})
export class AppModule {}
