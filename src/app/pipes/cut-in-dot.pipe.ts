import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutInDot'
})
export class CutInDotPipe implements PipeTransform {

  transform(text: string): string {
    if (text.length > 0) {
      let splitted = text.split('.', 1);
      return `${splitted[0]}...`;
    } else {
      return 'No tiene información.';
    }
  }

}
