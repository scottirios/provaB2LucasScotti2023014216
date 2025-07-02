import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ZodValidationPipe } from '../pipes/zod-validation-pipe';
import { z } from 'zod';
import { title } from 'process';
import { CreateBookService } from './create-book.service';

const createBookBodySchema = z.object({
  title: z.string().min(1, 'Title is required'),
  author: z.string().min(1, 'Author is required'),
  publicationYear: z.number().min(1000).max(9999, 'Invalid publication year'),
  isbn: z.string().min(10).max(13, 'Invalid ISBN'),
});

const bodyValidationPipe = new ZodValidationPipe(createBookBodySchema);

type CreateBookBodySchema = z.infer<typeof createBookBodySchema>;

@Controller('/books')
export class CreateBookController {
  constructor(private createBook: CreateBookService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body(bodyValidationPipe) body: CreateBookBodySchema) {
    const { title, author, publicationYear, isbn } = body;

    await this.createBook.execute({
      title,
      author,
      publicationYear,
      isbn,
    });
  }
}
