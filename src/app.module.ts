import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma-service';
import { CreateBookController } from './books/create-book.controller';
import { CreateBookService } from './books/create-book.service';

@Module({
  imports: [],
  controllers: [AppController, CreateBookController],
  providers: [AppService, PrismaService, CreateBookService],
})
export class AppModule {}
