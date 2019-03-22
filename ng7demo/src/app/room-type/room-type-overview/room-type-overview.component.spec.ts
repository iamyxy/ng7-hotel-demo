import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTypeOverviewComponent } from './room-type-overview.component';

describe('RoomTypeOverviewComponent', () => {
  let component: RoomTypeOverviewComponent;
  let fixture: ComponentFixture<RoomTypeOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomTypeOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTypeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
