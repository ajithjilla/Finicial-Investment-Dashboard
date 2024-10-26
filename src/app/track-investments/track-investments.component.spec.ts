import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackInvestmentsComponent } from './track-investments.component';

describe('TrackInvestmentsComponent', () => {
  let component: TrackInvestmentsComponent;
  let fixture: ComponentFixture<TrackInvestmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackInvestmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackInvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
