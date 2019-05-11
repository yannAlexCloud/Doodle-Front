import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnSondageComponentComponent } from './own-sondage-component.component';

describe('OwnSondageComponentComponent', () => {
  let component: OwnSondageComponentComponent;
  let fixture: ComponentFixture<OwnSondageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnSondageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnSondageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
