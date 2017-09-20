import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <style>
    .container {
      padding: 0 20%;
    }
    .wrapper {
      width: 560px;
    }
    .item {
      pointer-events: none;
      min-width: 200px;
      min-height: 200px;
      margin: 0 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .selected-item {
      margin-top: 20px;
      text-align: center;
    }
    .selected-item-data {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  </style>

  <div class="container">
    <h1>Ng2-Carouselamos</h1>

    <div
      ng2-carouselamos
      [width]="500"
      [items]="listOfItems"
      [$item]="itemTemplate"
      [$prev]="prevTemplate"
      [$next]="nextTemplate"
      (onSelectedItem)="selectedItem = $event.item; selectedIdx = $event.index"
      class="wrapper"
    >
    </div>

    <div class="selected-item" *ngIf="selectedItem">
      <b>Selected Item</b>
      <div class="selected-item-data">
          <img [src]="selectedItem.img" width="200" height="200" alt="placeholder" />
          <span>{{selectedItem.name}}</span><br>
        </div>
    </div>
  </div>

  <ng-template #prevTemplate>
    <img src="../../../imgs/arrow.png" width="30" height="30"/>
  </ng-template>

  <ng-template #nextTemplate>
    <img src="../../../imgs/arrow.png" width="30" height="30" style="transform: rotate(180deg)"/>
  </ng-template>

  <ng-template let-item let-i="index" let-selectedIndex="selectedIndex" #itemTemplate>
    <div class="item" [ngStyle]="{ backgroundColor: item.bgColor }">
      <div>
        <img [src]="item.img" width="200" height="200" alt="placeholder" />
        <span [ngStyle]="{ 'font-weight': i === selectedIndex ? 'bold' : 'normal' }">{{item.name}}</span><br>
      </div>
    </div>
  </ng-template>
  `
})
export class AppComponent implements OnInit {
  selectedItem = Object
  selectedIdx: number
  listOfItems: Array<any>

  randomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  ngOnInit() {
    this.selectedIdx = 0
    this.listOfItems = [
      { name: "Lightweight", bgColor: this.randomColor(), img: "../../../imgs/1.jpg" },
      { name: "CSS3", bgColor: this.randomColor(), img: "../../../imgs/2.jpg" },
      { name: "Drag", bgColor: this.randomColor(), img: "../../../imgs/3.jpg" },
      { name: "AOT compatible", bgColor: this.randomColor(), img: "../../../imgs/4.jpg" },
      { name: "Customizable", bgColor: this.randomColor(), img: "../../../imgs/5.jpg" }
    ]
  }
}
