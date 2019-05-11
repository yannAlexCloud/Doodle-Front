import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSondageComponentComponent } from './liste-sondage-component.component';

describe('ListeSondageComponentComponent', () => {
  let component: ListeSondageComponentComponent;
  let fixture: ComponentFixture<ListeSondageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeSondageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSondageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
