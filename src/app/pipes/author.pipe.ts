import { Pipe, PipeTransform } from '@angular/core';
import { IAuthor } from '../interfaces/author';

@Pipe({
  name: 'author',
})
export class AuthorPipe implements PipeTransform {
  // transform(value: unknown, ...args: unknown[]): unknown {
  transform(author: IAuthor, ...args: unknown[]): string {
    // return null;
    return author.lastName + ' ' + author.firstName[0] + '.';
  }
}
