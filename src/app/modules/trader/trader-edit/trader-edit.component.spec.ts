import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderEditComponent } from './trader-edit.component';

describe('TraderEditComponent', () => {
  let component: TraderEditComponent;
  let fixture: ComponentFixture<TraderEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraderEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
