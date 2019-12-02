import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  listOfItems = [
    "http://placeimg.com/640/480/any?1",
    "http://placeimg.com/640/480/any?2",
    "http://placeimg.com/640/480/any?3",
    "http://placeimg.com/640/480/any?4",
    "http://placeimg.com/640/480/any?5"
  ];
}
