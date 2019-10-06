import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Ng2CarouselamosModule } from "ng2-carouselamos";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Ng2CarouselamosModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
