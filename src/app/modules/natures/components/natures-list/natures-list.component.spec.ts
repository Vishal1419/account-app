import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturesListComponent } from './natures-list.component';

describe('NaturesListComponent', () => {
  let component: NaturesListComponent;
  let fixture: ComponentFixture<NaturesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
