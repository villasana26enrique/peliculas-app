import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutInDot'
})
export class CutInDotPipe implements PipeTransform {

  transform(text: string): string {
    let splitted = text.split('.', 1);
    return `${splitted[0]}...`;
  }

}
