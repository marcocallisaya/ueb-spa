import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeProductFormComponent } from './type-product-form.component';

describe('TypeProductFormComponent', () => {
  let component: TypeProductFormComponent;
  let fixture: ComponentFixture<TypeProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
