import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSondageComponentComponent } from './create-sondage-component.component';

describe('CreateSondageComponentComponent', () => {
  let component: CreateSondageComponentComponent;
  let fixture: ComponentFixture<CreateSondageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSondageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSondageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
