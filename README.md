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

### Implementing
```html
<div
  ng2-carouselamos
  [width]="500"
  [items]="listOfItems"
  [$item]="itemTemplate"
  [$prev]="prevTemplate"
  [$next]="nextTemplate"
></div>

<ng-template #prevTemplate>
  <img src="prev.png" />
</ng-template>
<ng-template #nextTemplate>
  <img src="next.png" />
</ng-template>
<ng-template let-item let-i="index" #itemTemplate>
  {{i}}. {{item.name}}
</ng-template>
```

