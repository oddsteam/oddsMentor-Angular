import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteChipComponent } from './white-chip.component';

describe('WhiteChipComponent', () => {
  let component: WhiteChipComponent;
  let fixture: ComponentFixture<WhiteChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhiteChipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhiteChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
