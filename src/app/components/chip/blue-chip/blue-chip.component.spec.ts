import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueChipComponent } from './blue-chip.component';

describe('BlueChipComponent', () => {
  let component: BlueChipComponent;
  let fixture: ComponentFixture<BlueChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueChipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
