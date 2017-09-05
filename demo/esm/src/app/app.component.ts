import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <style>
      .item {
        user-select: none;
        pointer-events: none;
        min-width: 200px;
        min-height: 200px;
        background-color: red;
        margin: 0 5px;
      }
    </style>
    <div *ngIf="selectedI">{{ selectedIdx }} - {{selectedI | json}}</div>
    <div
      ng2-carouselamos
      [width]="500"
      [items]="listOfItems"
      [$item]="itemTemplate"
      [$prev]="prevTemplate"
      [$next]="nextTemplate"
      (onSelectedItem)="selectedI = $event.item; selectedIdx = $event.index"
    ></div>

    <ng-template #prevTemplate>
      <span><-</span>
    </ng-template>
    <ng-template #nextTemplate>
      <span>-></span>
    </ng-template>
    <ng-template let-item let-i="index" let-selectedIndex="selectedIndex" #itemTemplate>
      <div class="item">
        <b *ngIf="i === selectedIndex">{{i}}. {{item.name}}</b>
        <span *ngIf="i !== selectedIndex">{{i}}. {{item.name}}</span><br>
        <div>qdlknewbfewjkbfwjkbfjwbef</div><br>
        <div>qdlknewbfewjkbfwjkbfjwbef</div><br>
        <div>qdlknewbfewjkbfwjkbfjwbef</div><br>
        <div>qdlknewbfewjkbfwjkbfjwbef</div><br>
        <div>qdlknewbfewjkbfwjkbfjwbef</div><br>
        <div>qdlknewbfewjkbfwjkbfjwbef</div><br>
      </div>
    </ng-template>
  `,
  styles: []
})
export class AppComponent {
  selectedI = { name: "Jose Varela" }
  selectedIdx = 0
  listOfItems = [
    { name: "Jose Varela1" },
    { name: "Jose Varela2" },
    { name: "Jose Varela3" },
    { name: "Jose Varela4" },
    { name: "Jose Varela5" },
    { name: "Jose Varela" },
    { name: "Jose Varela" },
    { name: "Jose Varela" },
    { name: "Jose Varela" },
    { name: "Jose Varela" },
    { name: "Jose Varela" },
    { name: "Jose Varela" },
    { name: "Jose Varela" },
    { name: "Jose Varela" },
    { name: "Jose Varela" },
    { name: "Jose Varela" },
    { name: "Jose Varela" },
    { name: "Jose Varela" },
  ]
}
