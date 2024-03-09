import { FormControl } from '@angular/forms';

export class CustomValidators {
  static noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true };
    }
    return null;
  }

  static minChar(control: FormControl) {
    if (control.value <= 4) {
      return { minChar: true };
    }
    return null;
  }
}
