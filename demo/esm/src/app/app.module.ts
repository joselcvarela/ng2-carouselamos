import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { Ng2CarouselamosModule } from '../../lib';

@NgModule({
  imports: [ BrowserModule, Ng2CarouselamosModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
