import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BookRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.BookUncheckedCreateInput,
  ): Promise<Prisma.BookUncheckedCreateInput | void> {
    await this.prisma.book.create({
      data,
    });
  }

  async findAll(): Promise<Prisma.BookUncheckedCreateInput[] | null> {
    return await this.prisma.book.findMany();
  }

  async findById(id: string): Promise<Prisma.BookUncheckedCreateInput | null> {
    return await this.prisma.book.findUnique({
      where: { id },
    });
  }

  async findByTitle(
    title: string,
  ): Promise<Prisma.BookUncheckedCreateInput | null> {
    const book = this.prisma.book.findUnique({
      where: {
        title,
      },
    });

    return book;
  }

  async findByISBN(
    isbn: string,
  ): Promise<Prisma.BookUncheckedCreateInput | null> {
    const bookISBN = this.prisma.book.findUnique({
      where: {
        isbn,
      },
    });

    return bookISBN;
  }

  async save(data: Prisma.BookUncheckedUpdateInput): Promise<void> {
    await Promise.all([
      this.prisma.book.update({
        where: {
          id: data.id?.toString(),
        },
        data,
      }),
    ]);
  }

  async delete(model: Prisma.BookUncheckedCreateInput): Promise<void> {
    await this.prisma.book.delete({
      where: {
        id: model.id?.toString(),
      },
    });
  }
}
