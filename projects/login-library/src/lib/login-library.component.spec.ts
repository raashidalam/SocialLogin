import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLibraryComponent } from './login-library.component';

describe('LoginLibraryComponent', () => {
  let component: LoginLibraryComponent;
  let fixture: ComponentFixture<LoginLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
