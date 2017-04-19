import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureCreateComponent } from './nature-create.component';

describe('NatureCreateComponent', () => {
  let component: NatureCreateComponent;
  let fixture: ComponentFixture<NatureCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatureCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
