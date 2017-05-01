import { Directive, ElementRef, Input } from '@angular/core';
import { NG_VALIDATORS, Validators } from '@angular/forms';

@Directive({
  selector: '[itaLdap]',
  providers: [{ provide: NG_VALIDATORS, useExisting: LdapDirective, multi: true }]
})
export class LdapDirective implements Validators {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
