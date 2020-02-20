import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformar'
})
export class TransformarPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {


    if (args[0] == 'Mayuscula') {
      return value.toUpperCase();
    } else if (args[0] == 'Minuscula') {
      return value.toLowerCase();
    }


    return value;
  }

}
