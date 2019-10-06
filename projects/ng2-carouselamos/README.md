**NOTE:**

~~This project is no longer maintained.~~

This projects is active again :D

# Ng2Carouselamos

Ng2-carouselamos is a simple carousel/slider which just use css transitions to do the work

### Demo

![Demo](2017-06-29_18-02-13.gif)

### Getting started

- Install node package:

```
npm i ng2-carouselamos --save
```

And then, in your app.module.ts :

```
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
...
@NgModule({
  ...
  imports: [
    ...
    Ng2CarouselamosModule
  ],
  ...
})
```

### Documentation

`ng2-carouselamos` - attribute to apply carousel

`width` - size of window to show

`items` - objects array that belong to the carousel

`$item` - template for each item

`$prev` - template for previous button

`$next` - template for next button

`onSelectedItem($event)` - event triggered when snap element. \$event is an object containing the current item and the current index - { item: ..., index: ... }

Inside `$item` template we have access to the follow:

- `let-item` - the current element of the objects array

- `let-i="index"` - current index

### Implementing

```html
<div
  ng2-carouselamos
  [width]="500"
  [items]="[
    { name: 'Alice'},
    { name: 'Bob'},
    { name: 'John Doe'},
    { name: 'Jane Doe'}
  ]"
  [$item]="itemTemplate"
  [$prev]="prevTemplate"
  [$next]="nextTemplate"
  (onSelectedItem)="selectedItem = $event.item; selectedIndex = $event.index"
></div>

<div>
  Current item selected <br />
  {{ selectedIndex }} - {{ selectedItem }}
</div>

<ng-template #prevTemplate>
  <span>Previous</span>
</ng-template>

<ng-template #nextTemplate>
  <span>next</span>
</ng-template>

<ng-template let-item let-i="index" #itemTemplate>
  <div style="min-width: 200px">
    <b *ngIf="i === selectedIndex">{{i}}. {{item.name}}</b>
    <span *ngIf="i !== selectedIndex">{{i}}. {{item.name}}</span>
  </div>
</ng-template>
```

Based on @angular/cli(https://angular.io/guide/creating-libraries)
