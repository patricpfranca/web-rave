import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'descriptionReduce'
})
export class DescriptionReduce implements PipeTransform {

  transform(text: string, truncatein: number): string {
    if (text.length > truncatein) {
      return text.substr(0, truncatein) + '...';
    }

    return text;
  }
}
