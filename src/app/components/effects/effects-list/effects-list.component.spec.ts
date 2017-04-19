import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectsListComponent } from './effects-list.component';

describe('EffectsListComponent', () => {
  let component: EffectsListComponent;
  let fixture: ComponentFixture<EffectsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffectsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
