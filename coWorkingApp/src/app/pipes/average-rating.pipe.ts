import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'averageRating'
})
export class AverageRatingPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): number {
    let averageRating = 0;
    value.forEach((rating: any) => {
      averageRating += rating;
    });
    return averageRating / value.length
  }

}
