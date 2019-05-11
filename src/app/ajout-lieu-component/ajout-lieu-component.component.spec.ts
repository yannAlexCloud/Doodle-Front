import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutLieuComponentComponent } from './ajout-lieu-component.component';

describe('AjoutLieuComponentComponent', () => {
  let component: AjoutLieuComponentComponent;
  let fixture: ComponentFixture<AjoutLieuComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutLieuComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutLieuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
