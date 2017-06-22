import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: `
    <div
      ng2-carouselamos
      [width]="500"
      [$prev]="$prev"
      [$next]="$next"
    >
      <div class="box red">
      </div>
      <div class="box green">
      </div>
      <div class="box blue">
      </div>
      <div class="box pink">
      </div>
        <div class="box red">
      </div>
      <div class="box green">
      </div>
      <div class="box blue">
      </div>
      <div class="box pink">
      </div>
    </div>

    <ng-template #$prev>
      <img src="assets/img/prev.png" />
    </ng-template>
    <ng-template #$next>
      <img src="assets/img/next.png" />
    </ng-template>
    `,
})
export class AppComponent {
}
