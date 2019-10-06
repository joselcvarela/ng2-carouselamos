import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { Ng2CarouselamosComponent } from "./ng2-carouselamos.component";

describe("Ng2CarouselamosComponent", () => {
  let component: Ng2CarouselamosComponent;
  let fixture: ComponentFixture<Ng2CarouselamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Ng2CarouselamosComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2CarouselamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
