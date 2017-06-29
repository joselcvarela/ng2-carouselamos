var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var App = (function () {
    function App() {
        this.items = [];
        this.items = [
            { name: 'Jose' },
            { name: 'Alice' },
            { name: 'Bob' },
        ];
    }
    return App;
}());
App = __decorate([
    Component({
        selector: 'app',
        template: "\n    <div>\n      <div\n        ng2-carouselamos\n        class=\"slides-wrapper\"\n        [items]=\"items\"\n        [width]=\"590\"\n        [$prev]=\"prev\"\n        [$next]=\"next\"\n        [$item]=\"item\"\n      >\n      </div>\n    </div>\n\n    <ng-template #prev>\n      <img src=\"assets/images/icon_leftarrow.png\" />\n    </ng-template>\n    <ng-template #next>\n      <img src=\"assets/images/icon_rightarrow.png\" />\n    </ng-template>\n    <ng-template #item let-item let-i=\"index\">\n      <p>Name: {{item.name}}</p>\n      <p>Index: {{i}}</p>\n    </ng-template>\n  "
    }),
    __metadata("design:paramtypes", [])
], App);
export { App };
