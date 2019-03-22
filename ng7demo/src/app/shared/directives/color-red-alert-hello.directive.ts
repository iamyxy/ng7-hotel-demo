import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColorRedAlertHello]'
})
export class ColorRedAlertHelloDirective {

  // syntax sugar
  // bind host element attribute
  @HostBinding('style.color')
  color = 'red';

  // pass in the $event object
  @HostListener('click', ['$event'])
  onClick(event) {
    alert('Hello' + event.target.innerText);
  }

  constructor() {
    setTimeout( () => {
      this.color = 'green';
    }, 3000);

  }

}
