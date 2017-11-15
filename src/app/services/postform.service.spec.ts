import { TestBed, inject } from '@angular/core/testing';

import { PostformService } from './postform.service';

describe('PostformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostformService]
    });
  });

  it('should be created', inject([PostformService], (service: PostformService) => {
    expect(service).toBeTruthy();
  }));
});
