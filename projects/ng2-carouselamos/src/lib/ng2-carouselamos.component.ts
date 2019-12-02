import {
  Component,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  SimpleChanges,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import isEqual from "lodash.isequal";

export interface SelectedItemInterface {
  item: any;
  index: number;
  first: boolean;
}

@Component({
  selector: "[ng2-carouselamos]",
  styleUrls: ["./ng2-carouselamos.component.scss"],
  templateUrl: "./ng2-carouselamos.component.html"
})
/*
 *
 * @param() startAt - index of slide to render first. Default to 0.
 * @param() items - List of items to belong in carousel
 * @param() width - Size of window(view) to show
 * @param() $prev - Template for previous button
 * @param() $next - Template for next button
 * @param() $item - Template for the item
 */
export class Ng2CarouselamosComponent implements AfterViewInit {
  childIndex: number = 0;
  amount: number = 0;
  startPress: number = 0;
  lastX: number = 0;

  @Input()
  startAt = 0;

  @Input()
  items: Array<any> = [];

  @Input()
  width: number = 500;

  @Input()
  $prev: TemplateRef<any>;

  @Input()
  $next: TemplateRef<any>;

  @Input()
  $item: TemplateRef<any>;

  @Output()
  onSelectedItem: EventEmitter<SelectedItemInterface> = new EventEmitter();

  @ViewChild("list", { static: true })
  list: ElementRef;

  onMousedown(e: MouseEvent) {
    if (e.which === 1) {
      this.startPress = e.clientX;
      this.lastX = this.amount;
    }
  }
  onTouchdown(e: TouchEvent) {
    if (navigator.userAgent.indexOf("Android") >= 0) e.preventDefault();
    this.startPress = e.targetTouches[0].clientX;
    this.lastX = this.amount;
  }

  onMousemove(e: MouseEvent, maxWidth: number) {
    if (e.which === 1) {
      const amount = this.lastX - (this.startPress - e.clientX);
      if (amount > 0 || amount < -(maxWidth - this.width)) return;
      this.amount = amount;
    }
  }
  onTouchmove(e: TouchEvent, maxWidth: number) {
    if (navigator.userAgent.indexOf("Android") >= 0) e.preventDefault();
    const amount = this.lastX - (this.startPress - e.targetTouches[0].clientX);
    if (amount > 0 || amount < -(maxWidth - this.width)) return;
    this.amount = amount;
  }

  onMouseup(e: MouseEvent, elem: any) {
    if (e.which === 1) {
      this.startPress = 0;
      this.snap(elem);
    }
  }

  onTouchup(e: TouchEvent, elem: any) {
    if (navigator.userAgent.indexOf("Android") >= 0) e.preventDefault();
    this.startPress = 0;
    this.snap(elem);
  }

  snap(elem: any) {
    let counter = 0;
    let lastVal = 0;
    for (let i = 0; i < this.items.length; i++) {
      const el = elem.children[i];
      const style = el.currentStyle || window.getComputedStyle(el);
      counter +=
        el.offsetWidth +
        (parseFloat(style.marginLeft) + parseFloat(style.marginRight));
      if (this.amount <= lastVal && this.amount >= -counter) {
        this.amount = -lastVal;
        this.childIndex = i;
        this.onSelectedItem.emit({
          item: this.items[this.childIndex],
          index: this.childIndex,
          first: false
        });
        return;
      }
      lastVal = counter;
    }
    return counter;
  }

  scroll(forward: boolean, elem: any, qty = 1) {
    this.childIndex += forward ? qty : -qty;
    this.onSelectedItem.emit({
      item: this.items[this.childIndex],
      index: this.childIndex,
      first: false
    });
    this.amount = -this.calcScroll(elem);
  }

  calcScroll(elem: any) {
    let counter = 0;
    for (let i = this.childIndex - 1; i >= 0; i--) {
      const el = elem.children[i];
      const style = el.currentStyle || window.getComputedStyle(el);
      counter +=
        el.offsetWidth +
        (parseFloat(style.marginLeft) + parseFloat(style.marginRight));
    }
    return counter;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.items &&
      !isEqual(changes.items.previousValue, changes.items.currentValue)
    ) {
      if (changes.items.firstChange) {
        this.onSelectedItem.emit({
          item: this.items[this.childIndex],
          index: this.childIndex,
          first: true
        });
      }
      this.amount = 0;
    }
  }

  ngAfterViewInit() {
    this.startPress = 1;
    this.scroll(true, this.list.nativeElement, this.startAt);
    setTimeout(() => (this.startPress = 0));
  }
}
