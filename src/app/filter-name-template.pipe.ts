import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNameTemplate'
})
export class FilterNameTemplatePipe implements PipeTransform {

  transform(arr: any, filterName: number = null): [] {
    if (!filterName === null) {
      return arr;
    }
    return  arr.filter(tmpl => tmpl.nameTemplate === filterName);
  }

}
