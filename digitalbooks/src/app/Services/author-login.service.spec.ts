import { TestBed } from '@angular/core/testing';

import { AuthorLoginService } from './author-login.service';

describe('AuthorLoginService', () => {
  let service: AuthorLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
