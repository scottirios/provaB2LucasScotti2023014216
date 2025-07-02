import { Body, Controller, HttpCode, Param, Put } from '@nestjs/common';
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';
import { z } from 'zod';
import { EditBookService } from './edit-book.service';

const editBookBodySchema = z.object({
  title: z.string(),
  author: z.string(),
  publicationYear: z.number().min(1000).max(9999),
  isbn: z.string().length(13),
});

const bodyValidationPipe = new ZodValidationPipe(editBookBodySchema);

type EditBookBodySchema = z.infer<typeof editBookBodySchema>;

@Controller('/books/:id')
export class EditBookController {
  constructor(private editBook: EditBookService) {}

  @Put()
  @HttpCode(204)
  async handle(
    @Body(bodyValidationPipe) body: EditBookBodySchema,
    @Param('id') id: string,
  ) {
    const { title, author, publicationYear, isbn } = body;

    await this.editBook.execute({
      id,
      title,
      author,
      publicationYear,
      isbn,
    });
  }
}
