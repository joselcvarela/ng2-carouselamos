var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { CommonModule } from '@angular/common';
import { NgModule, Component, ViewChild, Input } from '@angular/core';
let Ng2Carouselamos = class Ng2Carouselamos {
    constructor() {
        this.width = 500;
        this.childIndex = 0;
        this.amount = 0;
    }
    ngAfterViewInit() {
        const $ng2Carouselamos = this.ng2Carouselamos.nativeElement;
        this.maxWidth = Array.prototype.slice.call($ng2Carouselamos.children).map(c => c.clientWidth).reduce((prev, curr) => (prev + curr));
    }
    scroll(forward) {
        const $child = this.ng2Carouselamos.nativeElement.children[this.childIndex];
        const nChilds = this.ng2Carouselamos.nativeElement.children.length;
        if (forward) {
            this.amount -= $child.clientWidth;
            this.childIndex = (this.childIndex + 1) % nChilds;
        }
        else {
            this.amount += $child.clientWidth;
            this.childIndex = Math.abs((this.childIndex - 1) % nChilds);
        }
        this.ng2Carouselamos.nativeElement.style.webkitTransform = `translateX(${this.amount}px)`;
    }
};
__decorate([
    ViewChild('ng2Carouselamos'),
    __metadata("design:type", Object)
], Ng2Carouselamos.prototype, "ng2Carouselamos", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Ng2Carouselamos.prototype, "width", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Ng2Carouselamos.prototype, "$prev", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Ng2Carouselamos.prototype, "$next", void 0);
Ng2Carouselamos = __decorate([
    Component({
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
          transition: transform 1s;
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
          <button *ngIf="$prev" (click)="scroll(false)" [disabled]="amount >= 0" [innerHTML]="$prev"></button>
          <button *ngIf="$next" (click)="scroll(true)" [disabled]="amount <= -maxWidth" [innerHTML]="$next"></button>
        </div>
      </div>
    `
    })
], Ng2Carouselamos);
export { Ng2Carouselamos };
let Ng2CarouselamosModule = class Ng2CarouselamosModule {
};
Ng2CarouselamosModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [Ng2Carouselamos],
        declarations: [Ng2Carouselamos]
    })
], Ng2CarouselamosModule);
export { Ng2CarouselamosModule };
