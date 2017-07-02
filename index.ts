import { CommonModule } from '@angular/common';  
import {
  NgModule,
  Component,
  Input,
  HostListener,
} from '@angular/core';
import isEqual from 'lodash.isequal';

@Component({
    selector: '[ng2-carouselamos]',
    template: `
      <style>
        .ng2-carouselamos-container {
          position: relative;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
        .ng2-carouselamos-wrapper {
          overflow: hidden;
        }
        .ng2-carouselamos {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-transition: -webkit-transform 1s;
          transition: -webkit-transform 1s;
          transition: transform 1s;
          transition: transform 1s, -webkit-transform 1s;
        }
        .controls {
          position: absolute;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          width: 100%;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          top: 50%;
          left: 0;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
        }
        .controls button{
          background: transparent;
          border: 0;
        }
      </style>
      <div
        class="ng2-carouselamos-container"
        (mousedown)="onMousedown($event)"
        (touchstart)="onTouchstart($event)"
        (mousemove)="onMousemove($event, list.scrollWidth)"
        (touchmove)="onTouchmove($event, list.scrollWidth)"
        (mouseup)="onMouseup($event)"
        (mouseleave)="onMouseup($event)"
        (touchend)="onTouchend($event)"
      >
        <div
          class="ng2-carouselamos-wrapper"
          [style.width]="width + 'px'"
        >
          <div
            class="ng2-carouselamos"
            [style.transition]="startPress > 0 ? 'none' : 'transform 1s'"
            [style.webkitTransition]="startPress >= 0 ? 'none' : 'transform 1s'"
            [style.transform]="'translateX('+amount+'px)'"
            [style.webkitTransform]="'translateX('+amount+'px)'"
            #list
          >
            <ng-template
              *ngFor="let item of items; let i = index"
              [ngTemplateOutlet]="$item"
              [ngTemplateOutletContext]="{$implicit: item, index: i}"
            ></ng-template>
          </div>
        </div>
        <div class="controls" *ngIf="$prev || $next">
          <button *ngIf="$prev" (click)="scroll(false, list)" [disabled]="childIndex <= 0">
            <ng-template [ngTemplateOutlet]="$prev"></ng-template>
          </button>
          <button *ngIf="$next" (click)="scroll(true, list)" [disabled]="childIndex >= items.length - 1">
            <ng-template [ngTemplateOutlet]="$next"></ng-template>
          </button>
        </div>
      </div>
    `
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
  @Input() items = [];
  @Input() width = 500;
  @Input() $prev;
  @Input() $next;
  @Input() $item;
  childIndex: number = 0;
  amount: number = 0;
  startPress: number = 0;
  lastX: number = 0;

  onMousedown(e: MouseEvent) {
    if (e.which === 1) {
      this.startPress = e.clientX;
      this.lastX = this.amount;
    }
  }
  onTouchdown(e: TouchEvent) {
    this.startPress = e.targetTouches[0].clientX;
    this.lastX = this.amount;
  }
  
  onMousemove(e: MouseEvent, maxWidth: number) {
    if (e.which === 1) {
      const amount = this.lastX - (this.startPress - e.clientX);
      if (amount > 0 || amount < -(maxWidth-this.width)) return;
      this.amount = amount;
    }
  }
  onTouchmove(e: TouchEvent, maxWidth: number) {
    const amount = this.lastX - (this.startPress - e.targetTouches[0].clientX);
    if (amount > 0 || amount < -(maxWidth-this.width)) return;
    this.amount = amount;
  }

  onMouseup(e: MouseEvent) {
    if (e.which === 1) {
      this.startPress = 0;
    }
  }
  
  onTouchup(e: TouchEvent) {
    this.startPress = 0;
  }

  scroll(forward, elem) {
    this.childIndex += forward ? 1 : -1;
    this.amount = -(this.calcScroll(elem));
  }

  calcScroll(elem) {
    let counter = 0;
    for (let i = this.childIndex-1; i >= 0; i--) {
      counter += elem.children[i].clientWidth;
    }
    return counter;
  }

  ngOnChanges(changes) {
    if (changes.items && !isEqual(changes.items.previousValue, changes.items.currentValue)) {
      this.amount = 0;
    }
  }
}

@NgModule({
    imports: [CommonModule],
    exports: [Ng2Carouselamos],
    declarations: [Ng2Carouselamos]
})
export class Ng2CarouselamosModule { }