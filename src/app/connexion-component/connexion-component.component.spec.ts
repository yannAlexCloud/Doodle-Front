import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionComponentComponent } from './connexion-component.component';

describe('ConnexionComponentComponent', () => {
  let component: ConnexionComponentComponent;
  let fixture: ComponentFixture<ConnexionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnexionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
