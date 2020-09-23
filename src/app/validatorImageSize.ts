import {FormControl} from '@angular/forms';

export class ValidatorImageSize {
  static checkSizeValid(control: FormControl): {[key: string]: boolean} | null {
    const valid = /(http|https):\/\/(www\.)?/gi.test(control.value);
    if (!valid) {
      return {checkSizeValid: true};
    }
    return null;
  }
}
