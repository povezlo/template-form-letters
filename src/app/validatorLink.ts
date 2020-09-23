import {FormControl} from '@angular/forms';

export class ValidatorLink {
  static checkLinkValid(control: FormControl): {[key: string]: boolean} | null {
    const valid = /(http|https):\/\/(www\.)?/gi.test(control.value);
    if (!valid) {
      return {checkLinkValid: true};
    }
    return null;
  }
}
