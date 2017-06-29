import { CommonModule } from '@angular/common';  
import {
  NgModule,
  Component,
  Input,
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
      <div class="ng2-carouselamos-container">
        <div class="ng2-carouselamos-wrapper" [style.width]="width + 'px'">
          <div
            class="ng2-carouselamos"
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

  scroll(forward, elem) {
    if (forward) {
      this.amount -= elem.children[this.childIndex].clientWidth;
      this.childIndex += 1;
    } else {
      this.childIndex -= 1;
      this.amount += elem.children[this.childIndex].clientWidth;
    }
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