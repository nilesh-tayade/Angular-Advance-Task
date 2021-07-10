import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookUserListComponent } from './facebook-user-list.component';

describe('FacebookUserListComponent', () => {
  let component: FacebookUserListComponent;
  let fixture: ComponentFixture<FacebookUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
