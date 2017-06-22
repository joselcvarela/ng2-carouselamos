import { CommonModule } from '@angular/common';  
import {
  NgModule,
  Component,
  ViewChild,
  AfterViewInit,
  Input,
  ContentChild,
  TemplateRef
} from '@angular/core';

@Component({
    selector: '[ng2-carouselamos]',
    template: `
      <style>
        .ng2-carouselamos-container {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .ng2-carouselamos-wrapper {
          overflow: hidden;
        }
        .ng2-carouselamos {
          display: flex;
          -webkit-transition: -webkit-transform 1s;
        }
        .controls {
          position: absolute;
          display: flex;
          width: 100%;
          justify-content: space-between;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
        .controls button{
          background: transparent;
          border: 0;
        }
      </style>
      <div class="ng2-carouselamos-container">
        <div class="ng2-carouselamos-wrapper" [style.width]="width + 'px'">
          <div class="ng2-carouselamos" #ng2Carouselamos>
            <ng-content></ng-content>
          </div>
        </div>
        <div class="controls" *ngIf="$prev || $next">
          <button *ngIf="$prev" (click)="scroll(false)" [disabled]="amount >= 0">
            <ng-template [ngTemplateOutlet]="$prev"></ng-template>
          </button>
          <button *ngIf="$next" (click)="scroll(true)" [disabled]="amount <= -maxWidth">
            <ng-template [ngTemplateOutlet]="$next"></ng-template>
          </button>
        </div>
      </div>
    `
})
export class Ng2Carouselamos implements AfterViewInit {
  @ViewChild('ng2Carouselamos') ng2Carouselamos;
  @Input() width = 500;
  @Input() $prev;
  @Input() $next;
  maxWidth: number;
  childIndex: number = 0;
  amount: number = 0;

  ngAfterViewInit() {
    const $ng2Carouselamos: HTMLElement = this.ng2Carouselamos.nativeElement;
    this.maxWidth = Array.prototype.slice.call($ng2Carouselamos.children).map(c => c.clientWidth).reduce((prev, curr) => (prev + curr));
  }

  scroll(forward) {
    const $child: HTMLElement = this.ng2Carouselamos.nativeElement.children[this.childIndex];
    const nChilds = this.ng2Carouselamos.nativeElement.children.length;
    if (forward) {
      this.amount -= $child.clientWidth;
      this.childIndex = (this.childIndex+1) % nChilds;
    } else {
      this.amount += $child.clientWidth;
      this.childIndex = Math.abs((this.childIndex-1) % nChilds);
    }
    this.ng2Carouselamos.nativeElement.style.webkitTransform = `translateX(${this.amount}px)`;
  }
  
}

@NgModule({
    imports: [CommonModule],
    exports: [Ng2Carouselamos],
    declarations: [Ng2Carouselamos]
})
export class Ng2CarouselamosModule { }