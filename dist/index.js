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
import { NgModule, Component, Input, } from '@angular/core';
import isEqual from 'lodash.isequal';
var Ng2Carouselamos = (function () {
    function Ng2Carouselamos() {
        this.items = [];
        this.width = 500;
        this.childIndex = 0;
        this.amount = 0;
    }
    Ng2Carouselamos.prototype.scroll = function (forward, elem) {
        if (forward) {
            this.amount -= elem.children[this.childIndex].clientWidth;
            this.childIndex += 1;
        }
        else {
            this.childIndex -= 1;
            this.amount += elem.children[this.childIndex].clientWidth;
        }
    };
    Ng2Carouselamos.prototype.ngOnChanges = function (changes) {
        if (changes.items && !isEqual(changes.items.previousValue, changes.items.currentValue)) {
            this.amount = 0;
        }
    };
    return Ng2Carouselamos;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], Ng2Carouselamos.prototype, "items", void 0);
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
__decorate([
    Input(),
    __metadata("design:type", Object)
], Ng2Carouselamos.prototype, "$item", void 0);
Ng2Carouselamos = __decorate([
    Component({
        selector: '[ng2-carouselamos]',
        template: "\n      <style>\n        .ng2-carouselamos-container {\n          position: relative;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n          -ms-flex-pack: center;\n          justify-content: center;\n        }\n        .ng2-carouselamos-wrapper {\n          overflow: hidden;\n        }\n        .ng2-carouselamos {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-transition: -webkit-transform 1s;\n          transition: -webkit-transform 1s;\n          transition: transform 1s;\n          transition: transform 1s, -webkit-transform 1s;\n        }\n        .controls {\n          position: absolute;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          width: 100%;\n          -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n          justify-content: space-between;\n          top: 50%;\n          left: 0;\n          -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n        }\n        .controls button{\n          background: transparent;\n          border: 0;\n        }\n      </style>\n      <div class=\"ng2-carouselamos-container\">\n        <div class=\"ng2-carouselamos-wrapper\" [style.width]=\"width + 'px'\">\n          <div\n            class=\"ng2-carouselamos\"\n            [style.transform]=\"'translateX('+amount+'px)'\"\n            [style.webkitTransform]=\"'translateX('+amount+'px)'\"\n            #list\n          >\n            <ng-template\n              *ngFor=\"let item of items; let i = index\"\n              [ngTemplateOutlet]=\"$item\"\n              [ngTemplateOutletContext]=\"{$implicit: item, index: i}\"\n            ></ng-template>\n          </div>\n        </div>\n        <div class=\"controls\" *ngIf=\"$prev || $next\">\n          <button *ngIf=\"$prev\" (click)=\"scroll(false, list)\" [disabled]=\"childIndex <= 0\">\n            <ng-template [ngTemplateOutlet]=\"$prev\"></ng-template>\n          </button>\n          <button *ngIf=\"$next\" (click)=\"scroll(true, list)\" [disabled]=\"childIndex >= items.length - 1\">\n            <ng-template [ngTemplateOutlet]=\"$next\"></ng-template>\n          </button>\n        </div>\n      </div>\n    "
    })
    /*
      *
      * @param() items - List of items to belong in carousel
      * @param() width - Size of window(view) to show
      * @param() $prev - Template for previous button
      * @param() $next - Template for next button
      * @param() $item - Template for the item
    */
], Ng2Carouselamos);
export { Ng2Carouselamos };
var Ng2CarouselamosModule = (function () {
    function Ng2CarouselamosModule() {
    }
    return Ng2CarouselamosModule;
}());
Ng2CarouselamosModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [Ng2Carouselamos],
        declarations: [Ng2Carouselamos]
    })
], Ng2CarouselamosModule);
export { Ng2CarouselamosModule };
