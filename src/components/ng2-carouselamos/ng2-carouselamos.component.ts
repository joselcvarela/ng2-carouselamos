import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  SimpleChanges
} from '@angular/core';
const isEqual = require('lodash.isequal')

@Component({
  selector: '[ng2-carouselamos]',
  styleUrls: ['./ng2-carouselamos.scss'],
  templateUrl: './ng2-carouselamos.component.html'
})
/*
  *
  * @param() items - List of items to belong in carousel
  * @param() width - Size of window(view) to show
  * @param() $prev - Template for previous button
  * @param() $next - Template for next button
  * @param() $item - Template for the item
*/
export class Ng2Carouselamos {
  @Input() items: Array<any> = [];
  @Input() width: number = 500;
  @Input() $prev: TemplateRef<any>;
  @Input() $next: TemplateRef<any>;
  @Input() $item: TemplateRef<any>;
  @Output() onSelectedItem: EventEmitter<any> = new EventEmitter();
  childIndex: number = 0;
  amount: number = 0;
  startPress: number = 0;
  lastX: number = 0;
  thresholdEnd: number = -1;

  calcThresholdEnd(children: Array<any>) {
    let temp = 0;
    let aux = 0;
    for (let i = 0; i < children.length - 1; i++) {
      if (aux >= this.width) {
        this.thresholdEnd = temp
        return;
      }
      temp = aux;
      const el = children[i];
      const style = el.currentStyle || window.getComputedStyle(el);
      aux += el.offsetWidth + (parseFloat(style.marginLeft) + parseFloat(style.marginRight));
    }
  }

  onMousedown(e: MouseEvent, elem: any) {
    if (e.which === 1) {
      this.startPress = e.clientX;
      this.lastX = this.amount;
      if (this.thresholdEnd === -1) {
        this.calcThresholdEnd(elem.children);
      }
    }
  }
  onTouchdown(e: TouchEvent, elem: any) {
    if (navigator.userAgent.indexOf('Android') >= 0) e.preventDefault();
    this.startPress = e.targetTouches[0].clientX;
    this.lastX = this.amount;
    if (this.thresholdEnd === -1) {
      this.calcThresholdEnd(elem.children);
    }
  }

  onMousemove(e: MouseEvent, elem: any) {
    if (e.which === 1) {
      const maxWidth = elem.scrollWidth
      const amount = this.lastX - (this.startPress - e.clientX);
      if (amount > 0 || amount + this.thresholdEnd < -(maxWidth - this.width)) {
        return;
      }
      this.amount = amount;
    }
  }
  onTouchmove(e: TouchEvent, elem: any) {
    if (navigator.userAgent.indexOf('Android') >= 0) e.preventDefault();
    const maxWidth = elem.scrollWidth
    const amount = this.lastX - (this.startPress - e.targetTouches[0].clientX);
    if (amount > 0 || amount + this.thresholdEnd < -(maxWidth - this.width)) {
      return;
    }
    this.amount = amount;
  }

  onMouseup(e: MouseEvent, elem: any) {
    if (e.which === 1) {
      this.startPress = 0;
      this.snap(elem);
    }
  }

  onTouchup(e: TouchEvent, elem: any) {
    if (navigator.userAgent.indexOf('Android') >= 0) e.preventDefault();
    this.startPress = 0;
    this.snap(elem);
  }

  snap(elem: any) {
    let counter = 0;
    let lastVal = 0;
    for (let i = 0; i < this.items.length; i++) {
      const el = elem.children[i];
      const style = el.currentStyle || window.getComputedStyle(el);
      counter += el.offsetWidth + (parseFloat(style.marginLeft) + parseFloat(style.marginRight));
      if (this.amount <= lastVal && this.amount >= -counter) {
        this.amount = -lastVal;
        this.childIndex = i;
        this.onSelectedItem.emit({ item: this.items[this.childIndex], index: this.childIndex });
        return;
      }
      lastVal = counter;
    }
    return counter;
  }

  scroll(forward: boolean, elem: any) {
    this.childIndex += forward ? 1 : -1;
    this.onSelectedItem.emit({ item: this.items[this.childIndex], index: this.childIndex });
    this.amount = -(this.calcScroll(elem));
  }

  calcScroll(elem: any) {
    let counter = 0;
    for (let i = this.childIndex - 1; i >= 0; i--) {
      const el = elem.children[i];
      const style = el.currentStyle || window.getComputedStyle(el);
      counter += el.offsetWidth + (parseFloat(style.marginLeft) + parseFloat(style.marginRight));
    }
    return counter;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.items && !isEqual(changes.items.previousValue, changes.items.currentValue)) {
      this.amount = 0;
    }
  }
}
