import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCookiesComponent } from './product-cookies.component';

describe('ProductCookiesComponent', () => {
  let component: ProductCookiesComponent;
  let fixture: ComponentFixture<ProductCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCookiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
