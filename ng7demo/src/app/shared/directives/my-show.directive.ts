import {Directive, ElementRef, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appMyShow]'
})
export class MyShowDirective  implements OnChanges{

  @Input()
  show: boolean;

  constructor(private ef: ElementRef) {
  }

  ngOnChanges() {
    if (this.show) {
      // ElementRef is wrapper of the host DOM object
      this.ef.nativeElement.style.display = ''; // show host element
    } else {
      this.ef.nativeElement.style.display = 'none'; // hide host element
    }
  }

}
