import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsDashboardComponent } from './positions-dashboard.component';

describe('PositionsDashboardComponent', () => {
  let component: PositionsDashboardComponent;
  let fixture: ComponentFixture<PositionsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionsDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
