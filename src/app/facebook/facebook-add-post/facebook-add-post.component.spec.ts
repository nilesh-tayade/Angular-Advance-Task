import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookAddPostComponent } from './facebook-add-post.component';

describe('FacebookAddPostComponent', () => {
  let component: FacebookAddPostComponent;
  let fixture: ComponentFixture<FacebookAddPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookAddPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookAddPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
