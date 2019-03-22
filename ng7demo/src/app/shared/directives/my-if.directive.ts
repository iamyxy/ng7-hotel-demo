import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMyIf]' // 隐式创建一个variable called appMyIf在directive中
})
export class MyIfDirective {

  constructor( private tRef: TemplateRef<any>,
               private  vRef: ViewContainerRef) { }

  @Input()
  set appMyIf(flag) {
    if (flag) {
      this.vRef.createEmbeddedView(this.tRef);
    } else {
      this.vRef.clear();
    }
  }
}
