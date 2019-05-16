import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderAddComponent } from './trader-add.component';

describe('TraderAddComponent', () => {
  let component: TraderAddComponent;
  let fixture: ComponentFixture<TraderAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraderAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
