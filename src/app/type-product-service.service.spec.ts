import { TestBed } from '@angular/core/testing';

import { TypeProductServiceService } from './type-product-service.service';

describe('TypeProductServiceService', () => {
  let service: TypeProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
