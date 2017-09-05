import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2Carouselamos } from './components';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    Ng2Carouselamos,
  ],
  exports: [
    Ng2Carouselamos,
  ]
})
export class Ng2CarouselamosModule {
}
