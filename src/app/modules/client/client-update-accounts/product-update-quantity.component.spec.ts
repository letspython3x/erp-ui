import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpdateQuantityComponent } from './client-update-accounts.component';

describe('ProductUpdateQuantityComponent', () => {
  let component: ProductUpdateQuantityComponent;
  let fixture: ComponentFixture<ProductUpdateQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductUpdateQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUpdateQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
