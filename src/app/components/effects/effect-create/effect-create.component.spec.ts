import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectCreateComponent } from './effect-create.component';

describe('EffectCreateComponent', () => {
  let component: EffectCreateComponent;
  let fixture: ComponentFixture<EffectCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffectCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
