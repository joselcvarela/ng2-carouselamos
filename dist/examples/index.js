var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app',
        templateUrl: "\n    <div\n      ng2-carouselamos\n      [width]=\"500\"\n      [$prev]=\"$prev\"\n      [$next]=\"$next\"\n    >\n      <div class=\"box red\">\n      </div>\n      <div class=\"box green\">\n      </div>\n      <div class=\"box blue\">\n      </div>\n      <div class=\"box pink\">\n      </div>\n        <div class=\"box red\">\n      </div>\n      <div class=\"box green\">\n      </div>\n      <div class=\"box blue\">\n      </div>\n      <div class=\"box pink\">\n      </div>\n    </div>\n\n    <ng-template #$prev>\n      <img src=\"assets/img/prev.png\" />\n    </ng-template>\n    <ng-template #$next>\n      <img src=\"assets/img/next.png\" />\n    </ng-template>\n    ",
    })
], AppComponent);
export { AppComponent };
