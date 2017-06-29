@Component({
  selector: 'app',
  template: `
    <div>
      <div
        ng2-carouselamos
        class="slides-wrapper"
        [items]="items"
        [width]="590"
        [$prev]="prev"
        [$next]="next"
        [$item]="item"
      >
      </div>
    </div>

    <ng-template #prev>
      <img src="assets/images/icon_leftarrow.png" />
    </ng-template>
    <ng-template #next>
      <img src="assets/images/icon_rightarrow.png" />
    </ng-template>
    <ng-template #item let-item let-i="index">
      <p>Name: {{item.name}}</p>
      <p>Index: {{i}}</p>
    </ng-template>
  `
})
export class App{
  items: Array<any> = []

  constructor() {
    this.items = [
      { name: 'Jose' },
      { name: 'Alice' },
      { name: 'Bob' },
    ]
  }
}
