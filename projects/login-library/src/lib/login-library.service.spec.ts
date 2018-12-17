import { TestBed } from '@angular/core/testing';

import { LoginLibraryService } from './login-library.service';

describe('LoginLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginLibraryService = TestBed.get(LoginLibraryService);
    expect(service).toBeTruthy();
  });
});
