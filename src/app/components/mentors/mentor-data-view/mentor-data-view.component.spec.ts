import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorDataViewComponent } from './mentor-data-view.component';

describe('MentorDataViewComponent', () => {
  let component: MentorDataViewComponent;
  let fixture: ComponentFixture<MentorDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorDataViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
