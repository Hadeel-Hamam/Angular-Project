import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditFormat'
})
export class CreditFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (value && value.length === 16) {
      return value.replace(/(.{4})/g, '$1 - ').trim();
    }
    return value;
  }


}
