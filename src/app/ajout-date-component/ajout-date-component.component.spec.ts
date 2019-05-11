import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDateComponentComponent } from './ajout-date-component.component';

describe('AjoutDateComponentComponent', () => {
  let component: AjoutDateComponentComponent;
  let fixture: ComponentFixture<AjoutDateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutDateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutDateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
