import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdinr'
})
export class UsdinrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): any {
    const [price] =args
    return value*price;
  }

}
