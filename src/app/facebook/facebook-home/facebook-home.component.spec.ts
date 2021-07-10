import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookHomeComponent } from './facebook-home.component';

describe('FacebookHomeComponent', () => {
  let component: FacebookHomeComponent;
  let fixture: ComponentFixture<FacebookHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
